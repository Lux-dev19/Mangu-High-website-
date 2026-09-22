import { useEffect, useMemo, useRef, useState } from "react";
import {
  collectExternalAssets,
  formatBytes,
  listFiles,
  listPageModules,
  totalBytes,
} from "../sourceFiles";
import { buildExport, type ExportResult } from "../exportBundle";

type Status = "idle" | "generating" | "success" | "error";

const included = [
  { icon: "ri-code-s-slash-line", label: "Complete application source (pages, components, routing)" },
  { icon: "ri-palette-line", label: "Design system & stylesheet (Tailwind config + global CSS)" },
  { icon: "ri-settings-3-line", label: "Configuration & dependency files to run it locally" },
  { icon: "ri-file-list-3-line", label: "manifest.json listing every file and external asset URL" },
  { icon: "ri-book-open-line", label: "README with local setup and run instructions" },
  { icon: "ri-shield-check-line", label: "No secrets, credentials or private data — ever" },
];

/** The interactive export panel: summary, download action, progress and result states. */
export default function DownloadPanel() {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ExportResult | null>(null);
  const [error, setError] = useState("");
  const objectUrlRef = useRef<string | null>(null);

  const stats = useMemo(() => {
    const files = listFiles();
    const assets = collectExternalAssets();
    return {
      fileCount: files.length,
      uncompressed: totalBytes(),
      assetCount: assets.length,
      pages: listPageModules(),
    };
  }, []);

  useEffect(
    () => () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    },
    [],
  );

  const triggerDownload = (resultItem: ExportResult) => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(resultItem.blob);
    objectUrlRef.current = url;

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = resultItem.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const runExport = async () => {
    setStatus("generating");
    setProgress(0);
    setError("");

    try {
      const built = await buildExport((percent) => setProgress(percent));
      setResult(built);
      setStatus("success");
      triggerDownload(built);
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error && caught.message
          ? caught.message
          : "The export could not be completed. Please try again.",
      );
    }
  };

  const isGenerating = status === "generating";

  return (
    <section className="bg-background-50 py-16 md:py-20">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* What's included */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" />
                Package Contents
              </span>
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                Everything needed to run the site locally
              </h2>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-50 text-lg text-primary-600">
                      <i className={item.icon} />
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-foreground-700">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 border-t border-background-200 pt-6 sm:grid-cols-3">
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                    Files
                  </p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-foreground-950">
                    {stats.fileCount}
                  </p>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                    Estimated size
                  </p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-foreground-950">
                    {formatBytes(stats.uncompressed)}
                  </p>
                  <p className="mt-1 text-xs text-foreground-500">uncompressed source</p>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                    External assets
                  </p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-foreground-950">
                    {stats.assetCount}
                  </p>
                  <p className="mt-1 text-xs text-foreground-500">referenced by URL</p>
                </div>
              </div>

              <div className="mt-8 border-t border-background-200 pt-6">
                <div className="flex items-center justify-between">
                  <p className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                    Pages included in this export
                  </p>
                  <span className="rounded-full bg-secondary-100 px-2.5 py-0.5 font-label text-xs font-semibold text-secondary-900">
                    {stats.pages.length}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stats.pages.map((page) => (
                    <span
                      key={page}
                      className="rounded-full border border-background-200 bg-background-100 px-3 py-1 font-mono text-xs text-foreground-700"
                    >
                      /{page}
                    </span>
                  ))}
                </div>
                <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-foreground-500">
                  <i className="ri-refresh-line mt-0.5 text-accent-600" />
                  The archive is re-read from the current source every time you export, so the
                  latest pages and content are always included.
                </p>
              </div>
            </div>
          </div>

          {/* Action panel */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-primary-200 bg-primary-50 p-6 md:p-8">
              <i className="ri-download-cloud-2-line text-4xl text-primary-600" />
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground-950">
                Download the website
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                Generates a .zip archive of the complete project source directly in your browser.
                No account or sign-in required.
              </p>

              {status !== "success" ? (
                <button
                  type="button"
                  onClick={runExport}
                  disabled={isGenerating}
                  className="btn-accent mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <i className={isGenerating ? "ri-loader-4-line animate-spin" : "ri-download-2-line"} />
                  {isGenerating ? "Generating package…" : "Download Website"}
                </button>
              ) : null}

              {isGenerating ? (
                <div className="mt-6">
                  <div className="flex items-center justify-between font-label text-xs text-foreground-600">
                    <span>Packaging source files…</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary-100">
                    <div
                      className="h-full rounded-full bg-accent-500 transition-[width] duration-200 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : null}

              {status === "success" && result ? (
                <div className="mt-6 rounded-md border border-primary-200 bg-background-50 p-5">
                  <p className="flex items-center gap-2 font-label text-sm font-semibold text-primary-700">
                    <i className="ri-checkbox-circle-line text-lg" />
                    Your export is ready
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-foreground-700">
                    <i className="ri-file-zip-line text-lg text-accent-600" />
                    <span className="truncate">{result.fileName}</span>
                  </p>
                  <p className="mt-1 text-xs text-foreground-500">
                    {result.fileCount} files · {formatBytes(result.bytes)} compressed
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => triggerDownload(result)}
                      className="btn-primary w-full"
                    >
                      <i className="ri-download-2-line" />
                      Download again
                    </button>
                    <button
                      type="button"
                      onClick={runExport}
                      className="btn-outline w-full"
                    >
                      <i className="ri-refresh-line" />
                      Regenerate export
                    </button>
                  </div>
                </div>
              ) : null}

              {status === "error" ? (
                <div className="mt-6 rounded-md border border-red-300 bg-red-50 p-5">
                  <p className="flex items-center gap-2 font-label text-sm font-semibold text-red-700">
                    <i className="ri-error-warning-line text-lg" />
                    Export failed
                  </p>
                  <p className="mt-2 text-sm text-red-700">{error}</p>
                  <button type="button" onClick={runExport} className="btn-primary mt-4 w-full">
                    <i className="ri-refresh-line" />
                    Try again
                  </button>
                </div>
              ) : null}

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-foreground-500">
                <i className="ri-information-line mt-0.5" />
                External images stay referenced by URL rather than bundled, and are listed in the
                manifest. Secrets and private data are never included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}