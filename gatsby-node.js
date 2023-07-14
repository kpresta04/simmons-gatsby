const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions
  // // Query for all products in Shopify
  // const result = await graphql(`
  //   query {
  //     products(sortKey: TITLE, first: 250) {
  //       edges {
  //         node {
  //           images(first: 250) {
  //             nodes {
  //               url
  //             }
  //           }
  //           title
  //           id
  //           variants(first: 250) {
  //             nodes {
  //               id
  //               price {
  //                 amount
  //               }
  //               title
  //               availableForSale
  //               selectedOptions {
  //                 name
  //               }
  //             }
  //           }
  //           handle
  //           descriptionHtml
  //           description
  //           availableForSale
  //           priceRange {
  //             maxVariantPrice {
  //               amount
  //             }
  //             minVariantPrice {
  //               amount
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  // result.data.products.edges.node.forEach(({ node }) => {
  //   createPage({
  //     path: `/product/${node.handle}`,
  //     component: path.resolve(`./src/components/products/Product.js`),
  //     context: {
  //       product: node,
  //     },
  //   })
  // })
}
