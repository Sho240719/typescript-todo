import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  pluginJs.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      "no-unreachable": "warn",
      "no-extra-parens": "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
