module.exports = {
  siteMetadata: {
    title: "ListDataVis",
  },
  plugins: [
    "gatsby-plugin-typescript",
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
    "@chakra-ui/gatsby-plugin",
  ],
};
