# Eleventy, esbuild, Vite, and Vitest

Let's take a look at making an Eleventy site built around TS, TSX, and Vitest. How? Using esbuild and Vite.

## Failure during testing

`npm run test`

- This runs `site/index.test.tsx`
- That test is ESM/Vitest
- It tries to construct `Eleventy` using the root `eleventy.config.js`
- That fails in `@11ty/eleventy/src/Util/Require.js`
- The `requireAbsolute` function manually calls `require`

