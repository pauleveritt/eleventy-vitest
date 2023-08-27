import { expect, test } from "vitest";

import { render } from "./index.11ty";

test("render index", () => {
  const result = render();
  expect(result).to.contain("The body");
});
