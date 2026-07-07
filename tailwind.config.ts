import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE7",
        raised: "#EAE1D3",
        ink: "#2A1F1A",
        steel: "#8A7A6D",
        clay: "#C65A2E",
        ochre: "#A8763E",
        hairline: "#DCD2C2",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        serif: ['"Instrument Serif"', "serif"],
      },
      maxWidth: { shell: "1180px" },
    },
  },
  plugins: [],
};
export default config;
