import React, { useState, useEffect } from "react"
import SEO from "~/components/SEO/SEO"
import Header from "../components/headers/light"
import Footer from "../components/footers/FiveColumnDark"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import tw from "twin.macro"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArrowLeft from "~/images/arrow-left.svg"
import ArrowRight from "~/images/arrow-right.svg"
import SearchIcon from "~/images/search.svg"

const ArrowButton = tw.button`border border-blue-900 bg-transparent p-3`

export function ProductCard(props) {
  const linkHref = `/product/${props.handle}`
  function numberWithCommas(x) {
    let y = Number(x).toFixed(2)

    return String(y).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  return (
    <div
      style={{
        width: "240px",
        margin: "1.75rem",
        fontWeight: "bold",
      }}
      className="mx-2"
    >
      <Link to={linkHref}>
        <GatsbyImage
          style={{ maxHeight: "200px", marginBottom: "1rem" }}
          placeholderStyle={{ opacity: "0" }}
          imgStyle={{
            borderRadius: "8px",
            width: "100%",
            height: "auto",
            objectFit: "scale-down",
            maxHeight: "200px",
          }}
          image={props.image}
        ></GatsbyImage>
        <h1>{props.title}</h1>
        {props.variants.length > 1 ? (
          <h1>From ${numberWithCommas(props.price)}</h1>
        ) : (
          <h1>${numberWithCommas(props.price)}</h1>
        )}
      </Link>
    </div>
  )
}

const PageHeader = tw.h1`text-3xl text-center my-12 md:text-5xl md:my-20`
export default function Shop(props) {
  const collectionDict = {
    0: props.data.allProducts.nodes,
    1: props.data.featured.products,
    2: props.data.handGuns.products,

    3: props.data.rifles.products,
    4: props.data.shotGuns.products,
    5: props.data.ammo.products,
    6: props.data.other.products,
  }

  const isBrowser = typeof window !== "undefined"
  const getDefaultState = () => {
    let dfState = []
    if (isBrowser && props.location.state?.category) {
      dfState = collectionDict[props.location.state.category]
      return dfState
    } else {
      dfState = props.data.allProducts.nodes
      return dfState
    }
  }
  const defaultState = getDefaultState()

  const [currentPage, setCurrentPage] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState(defaultState)

  useEffect(() => {
    setSelectedCollection(defaultState)
  }, [defaultState])
  const pageDictionary = {}
  for (let i = 0; i < 100; i++) {
    let start = i * 7
    start += i

    let end = start + 7

    pageDictionary[i] = {
      start: i === 0 ? 0 : start,

      end: i === 0 ? 7 : end,
    }
  }

  return (
    <AnimationRevealPage disabled>
      <Header />
      <SEO
        pageDesc="Browse the latest products at Simmons Gun Repair"
        pageTitle={"Shop - Simmons Gun Repair"}
      />
      <PageHeader>Products</PageHeader>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          className="toolbar-wrapper"
          style={{
            borderBottom: "1px solid #ebebeb",
            borderTop: "1px solid #ebebeb",
            width: "80%",
            maxWidth: "1080px",
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: "22px",
          }}
        >
          <div
            className="filter-wrapper"
            style={{ display: "flex", width: "fit-content" }}
          >
            <label
              htmlFor="shop-filter"
              css={tw`flex items-center justify-center w-20 uppercase`}
              className="filter-label"
            >
              Filter By
            </label>
            <select
              id="shop-filter"
              onChange={e => {
                setCurrentPage(0)

                const indexInt = Number(e.target.value)

                setSelectedCollection(collectionDict[indexInt])
              }}
            >
              {isBrowser ? (
                props.location.state?.category !== "undefined" ? (
                  <option value="" selected disabled hidden>
                    Category
                  </option>
                ) : null
              ) : null}
              <option value="0">All products</option>
              <option value="1">Best selling</option>
              <option value="2">Hand guns</option>

              <option value="3">Rifles</option>
              <option value="4">Shot guns</option>
              <option value="5">Ammunition</option>
              <option value="6">Other</option>
            </select>
          </div>
          <div
            id="search-form-div"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <form
              onEmptied={e => {
                console.log("reset")
              }}
              onSubmit={e => {
                e.preventDefault()
                const searchTerm = document
                  .querySelector("#search-input")
                  .value.toLowerCase()
                const results = props.data.allProducts.nodes.filter(item => {
                  const lowerCaseTags = item.tags.map(tag => tag.toLowerCase())

                  if (lowerCaseTags.includes(searchTerm)) {
                    return item
                  }
                })

                if (results.length > 0) {
                  setCurrentPage(0)

                  setSelectedCollection(results)
                } else {
                  setSelectedCollection([])
                }
              }}
              name="search"
              style={{ display: "flex", placeItems: "center", width: "100%" }}
            >
              <input
                type="search"
                placeholder="Search"
                required
                name="search-input"
                id="search-input"
                css={tw`w-full h-10 lg:w-64`}
              ></input>
              <button
                id="search-button"
                style={{
                  width: "50px",
                  cursor: "pointer",
                  flex: "0 0 auto",
                  display: "flex",
                  placeItems: "center",
                }}
              >
                <SearchIcon css={tw`w-full h-10 p-3 text-white bg-blue-900`} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1280px",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {selectedCollection && selectedCollection.length === 0 && (
          <div css={tw`flex justify-center w-full h-32 my-20`}>
            <p css={tw`text-xl font-bold lg:text-4xl`}>No results found</p>
          </div>
        )}

        {selectedCollection &&
          selectedCollection.map((product, index) => {
            if (
              index <= pageDictionary[currentPage].end &&
              index >= pageDictionary[currentPage].start
            ) {
              const image = getImage(product.media[0].image)
              return (
                <ProductCard
                  key={index}
                  title={product.title}
                  variants={product.variants}
                  image={image}
                  price={product.priceRangeV2.minVariantPrice.amount}
                  handle={product.handle}
                />
              )
            } else {
              return ""
            }
          })}
        {selectedCollection && selectedCollection.length > 8 && (
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
              Page {currentPage + 1} of{" "}
              {Math.ceil(selectedCollection.length / 8)}
            </p>
            <ArrowButton
              onClick={e => {
                if (currentPage < selectedCollection.length / 8 - 1) {
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
  query MyQuery {
    featured: shopifyCollection(title: { eq: "Featured Products" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    ammo: shopifyCollection(title: { eq: "Ammunition" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    handGuns: shopifyCollection(title: { eq: "Handguns" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    rifles: shopifyCollection(title: { eq: "Rifles" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    shotGuns: shopifyCollection(title: { eq: "Shotguns" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    featured: shopifyCollection(title: { eq: "Featured Products" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
    allProducts: allShopifyProduct(
      filter: { status: { eq: ACTIVE } }
      sort: { id: ASC }
    ) {
      nodes {
        title
        handle
        shopifyId
        variants {
          title
          shopifyId
        }
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        tags
        media {
          ... on ShopifyMediaImage {
            id
            image {
              altText
              gatsbyImageData
              originalSrc
              src
            }
          }
        }
      }
    }
    other: shopifyCollection(title: { eq: "Other" }) {
      products {
        variants {
          title
          shopifyId
        }
        title
        handle
        shopifyId
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        media {
          ... on ShopifyMediaImage {
            image {
              src
              originalSrc
              gatsbyImageData(placeholder: BLURRED)
              altText
            }
          }
        }
      }
    }
  }
`
