import type { Config } from "tailwindcss";
import primevueAutoThemeSync from "./scripts/theme.json";

export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...primevueAutoThemeSync,
    },
  },
} satisfies Config;
