const fetchGraphQL = query =>
  fetch({
    method: "post",
    url: `https://${process.env.GATSBY_SHOPIFY_URI}/api/graphql`,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/graphql",
    },
    body: JSON.stringify(query),
  })

exports.handler = async function (event, context) {
  const logInMutation = `
	mutation  {
customerAccessTokenCreate(input: {
email: "${event.body.email}",
password: "${event.body.password}"
}) {
customerUserErrors {
code
field
message
}
customerAccessToken {
accessToken
expiresAt
}
}
}`
  const response = await fetchGraphQL(logInMutation).then(res => res.json())
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
