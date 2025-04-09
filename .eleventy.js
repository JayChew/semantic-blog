module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "dist"
    }
  };
};