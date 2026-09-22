/** @type {import('tailwindcss').Config} */

const scale = (role: string) =>
  Array.from({ length: 11 }, (_, i) => i).reduce<Record<string, string>>((acc, i) => {
    const step = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950][i];
    acc[step] = `oklch(var(--${role}-${step}) / <alpha-value>)`;
    return acc;
  }, {});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: scale("background"),
        primary: scale("primary"),
        accent: scale("accent"),
        secondary: scale("secondary"),
        foreground: scale("foreground"),
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-heading)"],
        serif: ["var(--font-heading)"],
        label: ["var(--font-label)"],
      },
      maxWidth: {
        site: "1240px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1s ease both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};