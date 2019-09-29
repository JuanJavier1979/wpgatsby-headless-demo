module.exports = {
  siteMetadata: {
    title: `WordPress and Gatsby headless demo`,
    description: `A simple headless demo site with Gatsby on the frontend and WordPress on the backend as a data source.`,
    author: `@JuanJavier1979`,
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wptestsite.local`, // Using a Local by Flywheel WordPress install on thi URL.
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
