# Eleventy, esbuild, Vite, and Vitest

Let's take a look at making an Eleventy site built around TS, TSX, and Vitest. How? Using esbuild and Vite.

## Failure during testing

`npm run test`

- This runs `site/index.test.tsx`
- That test is ESM/Vitest
- It tries to construct `Eleventy` using the root `eleventy.config.js`
- That fails in `@11ty/eleventy/src/Util/Require.js`
- The `requireAbsolute` function manually calls `require`

This leads to an exception that is caught and re-thrown with:

```
The constructor leads to this error in line 331 in TemplateConfig.js:

require() of ES Module /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/eleventy.config.js from /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/node_modules/@11ty/eleventy/src/Util/Require.js not supported.
eleventy.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename eleventy.config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).

```