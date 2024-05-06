// uno.config.ts
import presetIcons from "@unocss/preset-icons";
import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetWind from "@unocss/preset-wind";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        // ...
      },
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
        logos: () =>
          import("@iconify-json/logos/icons.json").then((i) => i.default),
      },
    }),
    presetWind(),
  ],
  transformers: [transformerVariantGroup()],
});
