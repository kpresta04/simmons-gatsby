import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import StoreContext from "../../context/StoreContext"
import { Grid, Product, Title, PriceTag } from "./styles"
import Img from "gatsby-image"

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = `
      query productGrid {
        products(query: "[createdAt]", first: 10) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                nodes {
                  id
                  originalSrc
                }
              }
            }
          }
          nodes {
            variants {
              nodes {
                price {
                  amount
                }
              }
            }
          }
        }
      }
    `

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : "EUR",
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              images: [firstImage],
              variants: [firstVariant],
            },
          }) => (
            <Product key={id}>
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile && (
                  <Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
                )}
              </Link>
              <Title>{title}</Title>
              <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            </Product>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  )
}

export default ProductGrid
