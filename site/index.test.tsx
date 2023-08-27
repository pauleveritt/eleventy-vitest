import { expect, test } from "vitest";

const Eleventy = require("../node_modules/@11ty/eleventy/src/Eleventy.js");

test("render Eleventy", async () => {
  // This goes to requireAbsolute which calls require and fails.
  const elev = new Eleventy("..", "../_site");
  const results = await elev.toJSON();
  expect(results).to.be.true;
});

/*

The constructor leads to this error in line 331 in TemplateConfig.js:

require() of ES Module /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/eleventy.config.js from /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/node_modules/@11ty/eleventy/src/Util/Require.js not supported.
eleventy.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename eleventy.config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /Users/pauleveritt/projects/pauleveritt/eleventy-vitest/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).


 */
