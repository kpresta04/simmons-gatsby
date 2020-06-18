import React from "react"

import Header from "../components/headers/light"
// import SEO from "../components/seo"
import Footer from "../components/footers/FiveColumnDark"
// import ProductGrid from "../components/ProductGrid"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import tw from "twin.macro"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"

export function ProductCard(props) {
  const linkHref = `/product/${props.handle}`
  return (
    <div style={{ maxWidth: "240px", margin: "1.75rem" }} className="mx-2">
      <Link to={linkHref}>
        <Img fixed={props.src}></Img>
        <h1>{props.title}</h1>
        <h1>${props.price}</h1>
      </Link>
    </div>
  )
}

const PageHeader = tw.h1`text-3xl text-center my-12 md:text-5xl md:my-20`
export default function shop({ data }) {
  console.log(data)
  return (
    <AnimationRevealPage disabled>
      <Header />
      <PageHeader>Featured Products</PageHeader>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.featuredProducts.products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            src={product.images[0].localFile.childImageSharp.fixed}
            price={product.priceRange.minVariantPrice.amount}
            handle={product.handle}
          />
        ))}
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
              fixed(width: 240, height: 240, cropFocus: CENTER, fit: COVER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
