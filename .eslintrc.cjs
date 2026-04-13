// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    // قواعد React Refresh
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // إيقاف التحذير عن المتغيرات غير المستخدمة
    "no-unused-vars": "off",

    // يمكنك إضافة قواعد إضافية حسب رغبتك
    "react/prop-types": "off", // إذا كنت لا تستخدم prop-types
    "react/react-in-jsx-scope": "off", // غير مطلوب مع React 17+
  },
};
