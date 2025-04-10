const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
  eleventyConfig.addFilter("date", function (date, format) {
    return new Date(date).toLocaleDateString("en-US", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  });
  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "dist"
    }
  };
};