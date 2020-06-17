const path = require("path")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://www.simmonsguns.biz/graphql",
        fields: ["products", "products/categories", "products/attributes"],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `simmons-gun-repairs`,
        // The storefront access token
        accessToken: `80ec29390ee7217adbe1cb9b5b4f0e4a`,
        apiVersion: "2020-04",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
  ],
}
