module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh", "@typescript-eslint"],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "import/prefer-default-export": "off",
    "arrow-body-style": ["error", "always"],
    "react/self-closing-comp": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-expression"],
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ],
    "@typescript-eslint/quotes": ["error", "single"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": ["error", "only-multiline"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
