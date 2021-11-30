const config = {
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    blank: "src/lib/layout/blank.svelte",
    _: "src/lib/layout/geonews.svelte"
  }
};

export default config;
