import Daisyui from "daisyui";
import type { Config } from "tailwindcss";
import type { Config as DaisyuiConf } from "daisyui";

const srcDir = ".";

export default {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [Daisyui],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  } as DaisyuiConf,
} satisfies Config;
