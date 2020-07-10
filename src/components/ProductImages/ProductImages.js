import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

export default function ProductImages({ shopifyId }) {
  console.log(shopifyId)

  const { shopifyProductVariant } = useStaticQuery(
    graphql`
      query($shopifyId: String) {
        shopifyProductVariant(shopifyId: { eq: $shopifyId }) {
          image {
            originalSrc
          }
        }
      }
    `
  )
  console.log(shopifyProductVariant)

  return (
    // <Img fluid={shopifyProductVariant.image.localFile.childImageSharp.fluid} />
    <img
      alt="Product"
      css={tw`lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded`}
      src={shopifyProductVariant.image.originalSrc}
    />
  )
}
