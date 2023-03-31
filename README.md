# Gemma Wedding Website

Wedding Website created for the Gemma family

## TODO

1. Add prettier
2. Brand theme from Squarespace
3. Grid (xma)
4. Footer (xma)
5. Header (xma based, just links)

- We format with prettier
- We lint with eslint

### .prettierrc

```json
{
  "semi": false,
  "trailingComma": "all",
  "singleQuote": false,
  "jsxSingleQuote": false,
  "printWidth": 100
}
```

### .eslintrc

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "prettier"],
  "rules": {
    "prettier/prettier": 1 // Warning
  },
  "env": {
    "browser": true,
    "node": true
  }
}
```

### eslintignore

```ignore
node_modules
.cache
/build
/public

/.vscode
/.env
/.husky

*.json
*.toml
*.loga
.gitignore
.prettierignore
```

## 🚀 Gatsby

This project is a static website developed with Gastby

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f541ef8-0f7b-4188-9214-af0e59be6141/deploy-status)](https://app.netlify.com/sites/gemma-wedding-2022/deploys)

This project is deployed on Netlify with Netlify CMS
