import React, { useState } from "react"

import Header from "../components/headers/light"
// import SEO from "../components/seo"
import Footer from "../components/footers/FiveColumnDark"
// import ProductGrid from "../components/ProductGrid"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import tw from "twin.macro"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"

import ArrowLeft from "~/images/arrow-left.svg"
import ArrowRight from "~/images/arrow-right.svg"

const ArrowButton = tw.button`border border-blue-900 bg-transparent p-3`

export function ProductCard(props) {
  const linkHref = `/product/${props.handle}`
  return (
    <div
      style={{ maxWidth: "240px", margin: "1.75rem", fontWeight: "bold" }}
      className="mx-2"
    >
      <Link to={linkHref}>
        <Img imgStyle={{ borderRadius: "8px" }} fixed={props.src}></Img>
        <h1>{props.title}</h1>
        <h1>${props.price}</h1>
      </Link>
    </div>
  )
}

const PageHeader = tw.h1`text-3xl text-center my-12 md:text-5xl md:my-20`
export default function Shop({ data }) {
  console.log(data)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState(data.allProducts)

  const pageDictionary = {
    0: {
      start: 0,
      end: 7,
    },
    1: {
      start: 8,
      end: 15,
    },
    2: {
      start: 16,
      end: 23,
    },
    3: {
      start: 24,
      end: 31,
    },
  }

  console.log(pageDictionary[0].start)
  console.log(pageDictionary[0].end)

  return (
    <AnimationRevealPage disabled>
      <Header />
      <PageHeader>Products</PageHeader>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.allProducts.nodes.map((product, index) => {
          if (
            index <= pageDictionary[currentPage].end &&
            index >= pageDictionary[currentPage].start
          ) {
            return (
              <ProductCard
                key={index}
                title={product.title}
                src={product.images[0].localFile.childImageSharp.fixed}
                price={product.priceRange.minVariantPrice.amount}
                handle={product.handle}
              />
            )
          }
        })}
        {selectedCollection.nodes.length > 8 && (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "4rem",
              marginTop: "1rem",
              placeItems: "center",
            }}
          >
            <ArrowButton
              onClick={e => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1)
                }
              }}
            >
              <ArrowLeft />
            </ArrowButton>
            <p
              style={{
                lineHeight: "1.5rem",
                margin: "0 1.5rem 0 1.5rem",
                height: "1.5rem",
                verticalAlign: "middle",
              }}
            >
              Page {currentPage + 1} of {selectedCollection.nodes.length / 8}
            </p>
            <ArrowButton
              onClick={e => {
                if (currentPage < selectedCollection.nodes.length / 8 - 1) {
                  setCurrentPage(currentPage + 1)
                }
              }}
            >
              <ArrowRight />
            </ArrowButton>
          </div>
        )}
      </div>
      <Footer />
    </AnimationRevealPage>
  )
}

export const query = graphql`
  query {
    featuredProducts: shopifyCollection(title: { eq: "Featured Products" }) {
      products {
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(
                width: 240
                height: 240
                cropFocus: CENTER
                fit: COVER
                quality: 100
              ) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
    allProducts: allShopifyProduct(
      filter: { availableForSale: { eq: true } }
      sort: { fields: id, order: ASC }
    ) {
      nodes {
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        tags
        images {
          localFile {
            childImageSharp {
              fixed(
                width: 240
                height: 240
                cropFocus: CENTER
                fit: COVER
                quality: 100
              ) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
