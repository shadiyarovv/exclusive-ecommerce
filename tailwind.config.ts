import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DB4444",
        secondary: "#00FF66",
        "light-red": "#E07575",
        "light-blue": "#A0BCE0",
        "gray-dark": "#363738",
        "gray-md": "#7D8184",
        "gray-light": "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
