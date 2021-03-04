const axios = require("axios")

const fetchGraphQL = query =>
  axios({
    method: "post",
    url: `https://${process.env.GATSBY_SHOPIFY_URI}/api/graphql`,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/graphql",
    },
    body: query,
  })

exports.handler = async function (event, context) {
  //   const logInMutation = `
  // 	mutation  {
  // customerAccessTokenCreate(input: {
  // email: "${event.body.email}",
  // password: "${event.body.password}"
  // }) {
  // customerUserErrors {
  // code
  // field
  // message
  // }
  // customerAccessToken {
  // accessToken
  // expiresAt
  // }
  // }
  // }`
  //   const response = await fetchGraphQL(logInMutation)
  const response = {
    username: event.body.username,
    password: event.body.password,
  }
  return {
    statusCode: 200,
    body: JSON.stringify(event.body),
  }
}
