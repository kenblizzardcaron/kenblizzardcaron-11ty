const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/pdf");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({
    "./src/site.webmanifest": "site.webmanifest",
  });
  eleventyConfig.addPassthroughCopy({
    "src/assets/pdf/kenblizzardcaron.pdf": "kenblizzardcaron.pdf",
  });

  // Add a markdown filter for Nunjucks
  const markdownIt = require("markdown-it");
  const md = new markdownIt({ html: true, linkify: true, typographer: true });
  eleventyConfig.addNunjucksFilter("markdown", (content) => md.render(content));
  eleventyConfig.addNunjucksFilter("rawFile", function(path) {
    return fs.readFileSync(path, "utf-8");
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
