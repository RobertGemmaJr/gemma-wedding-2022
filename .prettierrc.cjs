module.exports = {
  printWidth: 100,
  quoteProps: "as-needed",
  trailingComma: "es5",
  overrides: [
    {
      files: ".firebaserc",
      options: { parser: "json" },
    },
  ],
};
