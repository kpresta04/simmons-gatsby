import axios from "axios"

const fetchGraphQL = query =>
  axios({
    method: "post",
    url: `https://${process.env.GATSBY_SHOPIFY_URI}/api/graphql`,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.GATSBY_SHOPIFY_ADMIN_TOKEN,
      "Content-Type": "application/graphql",
    },
    data: query,
  })

export default fetchGraphQL
