require("axios")

const fetchGraphQL = query =>
  axios({
    method: "post",
    url: `https://${process.env.GATSBY_SHOPIFY_URI}/api/graphql`,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/graphql",
    },
    data: query,
  })

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(event.body),
  }
}
