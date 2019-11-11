module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console":
      process.env.NODE_ENV === "production" ? "error-handler.js" : "off",
    "no-debugger":
      process.env.NODE_ENV === "production" ? "error-handler.js" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
