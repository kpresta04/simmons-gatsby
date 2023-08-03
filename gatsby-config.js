const path = require("path")
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simmons Gun Repair",
    // titleTemplate: "%s · The Real Hero",
    description: "Professional gunsmithing since 1945.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bi7okob4zwzp`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        storeUrl: process.env.GATSBY_SHOPIFY_URI,
        password: process.env.GATSBY_SHOPIFY_ADMIN_TOKEN,
        shopifyConnections: ["collections"],
        salesChannel: process.env.SHOPIFY_APP_ID, // Optional but recommended
      },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://peaceful-turing-1274a7.netlify.app/`, // required!
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Varta"],
        },
      },
    },
  ],
}
