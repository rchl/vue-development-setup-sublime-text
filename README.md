# Vue development setup for Sublime Text

## Project setup

```sh
# npm
npm i
# yarn
yarn
```

## Vue development setup

1. Install `Vue Syntax Highlight`, `LSP` and `LSP-vue` from Package Control.
2. Open `Preferences: LSP-vue Settings` from the Command Palette.
3. In the user settings, on the right side, set the following options:

```js
{
    "initializationOptions": {
        "config": {
            "vetur.experimental.templateInterpolationService": true,
            "vetur.useWorkspaceDependencies": true,
        },
    },
}
```

 - I prefer to use `vetur.useWorkspaceDependencies` so that the project-local dependencies (like `typescript`) are used instead of the ones that are bundled with Vetur (which are potentially outdated).
 - `vetur.experimental.templateInterpolationService` enables type-checking in the `template` block. It's very helpful during development but it requires a bit of help with manual type annotations to work properly (due to limitation of the Vue Options API. Also see [`vetur`'s FAQ on the matter](https://vuejs.github.io/vetur/guide/FAQ.html#property-xxx-does-not-exist-on-type-combinedvueinstance)). See [`src/example.vue`](./src/example.vue) for some hints on how to annotate properly.

## Eslint setup & auto-fix on save

Eslint is useful during development to check and auto-fix the code on saving. This project bundles quite extensive and opinionated set of rules in the [`.eslintrc.js`](./.eslintrc.js) file.

1. Install `LSP-eslint` from Package Control.
2. Open `Preferences: LSP Settings` from the Command Palette.
3. In the user settings, on the right side, set the following options:

```js
    "lsp_code_actions_on_save": {
        "source.fixAll.eslint": true,
        // Optionally you can enable autoFix for all language servers that support it with:
        // "source.fixAll": true,
    },
```

 - Saving the file will automatically fix most issues found by eslint (requires ST4+).

## Typescript setup

A typical Vue/Nuxt project often includes pure javascript or typescript files so it's useful to install a Typescript language server to type-check those too.

1. Install `LSP-typescript` from Package Control.

## JSON language server

It's highly recommended to install the `LSP-json` package from Package Control which can validate and provide completions for various settings in Sublime Text (including `LSP-vue` and `LSP-eslint`) and standalone JSON files like `tsconfig.json`.
