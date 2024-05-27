// uno.config.ts
import presetIcons from "@unocss/preset-icons";
import presetWind from "@unocss/preset-wind";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

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
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
