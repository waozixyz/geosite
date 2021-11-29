const config = {
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    _: "src/lib/layout/geonews.svelte"
  }
};

export default config;
