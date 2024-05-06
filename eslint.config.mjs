// @ts-check
import unocss from "@unocss/eslint-config/flat";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    ...unocss.rules,
  },
  plugins: {
    ... unocss.plugins
  },
});
// Your custom configs here
