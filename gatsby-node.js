const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(limit: 250) {
        edges {
          node {
            title
            id
            variants {
              id
              title
              availableForSale
              selectedOptions {
                name
              }
              price
            }
            handle
            descriptionHtml
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
            media {
              ... on ShopifyMediaImage {
                id
                image {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.node.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/components/products/Product.js`),
      context: {
        product: node,
      },
    })
  })
}
