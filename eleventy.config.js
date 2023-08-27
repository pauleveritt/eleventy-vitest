module.exports = function (eleventyConfig) {
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });

  return {
    dir: {
      input: "site",
    },
    markdownTemplateEngine: "11ty.js",
    pathPrefix: "/testdir",
  };
};
