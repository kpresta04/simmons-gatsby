import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

export default function ProductImages({ shopifyId }) {
  console.log(shopifyId)

  const { shopifyProductVariant } = useStaticQuery(
    `
      query($shopifyId: ID!) {
        node(id: $shopifyId) {
          ... on ProductVariant {
            image {
              originalSrc
            }
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
      css={tw`object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto`}
      src={shopifyProductVariant.image.originalSrc}
    />
  )
}
