module.exports = {
  siteMetadata: {
    title: "ListDataVis",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
