import JSZip from "jszip";
import {
  collectExternalAssets,
  formatBytes,
  listFiles,
  sourceFiles,
  totalBytes,
} from "./sourceFiles";

export type ExportResult = {
  blob: Blob;
  fileName: string;
  bytes: number;
  fileCount: number;
};

export const EXPORT_FILE_NAME = "mangu-high-school-website-source.zip";

/** README bundled with the export so a developer can run the project locally. */
export function buildReadme(): string {
  const files = listFiles();
  const assets = collectExternalAssets();

  return `# Mangu High School — Website Source

A complete copy of the Mangu High School website, exported directly from the live
site for backup, migration or local development.

Export generated: ${new Date().toISOString()}
Files included: ${files.length}
Uncompressed size: ${formatBytes(totalBytes())}

## What is included

- Full application source under \`src/\` (pages, components, data, routing, styles)
- Project configuration: \`package.json\`, \`vite.config.ts\`, \`tailwind.config.ts\`,
  \`postcss.config.ts\`, \`tsconfig*.json\`, \`eslint.config.ts\`
- \`index.html\` entry file and the global stylesheet \`src/index.css\`
- \`manifest.json\` — every packaged file with its size, plus every external asset
  URL and the file it is referenced from
- \`project_plan.md\` — the original project plan

## What is NOT included

- **Secrets or credentials.** There are none in this project, and none are ever
  exported. Never add API keys directly to the source.
- **Bundled image files.** Images are served from an external CDN and are
  referenced by URL. They are listed in \`manifest.json\` under
  \`externalAssets\`. The site will load them directly from source; download them
  separately if you need a fully offline copy.
- **A database.** This website runs as a static front end and does not require a
  database. If one is connected later, export its schema and data separately
  from that backend's own dashboard.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Run locally

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# The site is served at http://localhost:3000

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview
\`\`\`

## Project structure

\`\`\`
.
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite + React + Tailwind build config
├── tailwind.config.ts  # Theme and design tokens
├── src/
│   ├── components/     # Shared base + feature components
│   ├── pages/          # Route-level pages
│   ├── mocks/          # Site content data
│   ├── router/         # Route configuration
│   └── index.css       # Design system + global styles
└── manifest.json       # Asset + file manifest for this export
\`\`\`

## External asset sources

${assets.length} external URL${assets.length === 1 ? "" : "s"} are referenced by the
project. See \`manifest.json\` for the full list. These remain subject to their
original providers' terms — this export references them rather than copying them,
so nothing restricted is redistributed.

---

Exported from the Mangu High School website.
`;
}

/** Manifest describing every packaged file and every external asset reference. */
function buildManifest() {
  const files = listFiles();
  const assets = collectExternalAssets();

  return {
    site: "Mangu High School Website",
    generatedAt: new Date().toISOString(),
    generator: "In-browser source export",
    fileCount: files.length,
    files: files.map(({ path, bytes }) => ({ path, bytes })),
    totalUncompressedBytes: totalBytes(),
    externalAssets: assets,
    notes: [
      "Source and configuration files are bundled in full.",
      "External assets are referenced by URL, not copied, and are listed in externalAssets.",
      "No secrets, credentials or private data are included in this export.",
    ],
  };
}

/**
 * Builds the downloadable archive in the browser.
 * `onProgress` reports real 0–100 progress from the compression step.
 */
export async function buildExport(onProgress: (percent: number) => void): Promise<ExportResult> {
  const zip = new JSZip();
  const files = listFiles();

  files.forEach(({ path }) => {
    const content = sourceFiles[path];
    if (typeof content === "string") zip.file(path, content);
  });

  zip.file("manifest.json", JSON.stringify(buildManifest(), null, 2));
  zip.file("README.md", buildReadme());

  const blob = await zip.generateAsync(
    {
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    },
    (metadata) => {
      onProgress(Math.min(100, Math.round(metadata.percent)));
    },
  );

  return {
    blob,
    fileName: EXPORT_FILE_NAME,
    bytes: blob.size,
    fileCount: files.length,
  };
}