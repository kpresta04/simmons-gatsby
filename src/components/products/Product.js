import React, { useContext, useState } from "react"
import StoreContext from "~/context/StoreContext"
import Layout from "../Layout/Layout"
import tw, { css } from "twin.macro"
// import ProductImages from "~/components/ProductImages/ProductImages"
// import { graphql } from "gatsby"
import SEO from "~/components/SEO/SEO"
import CartToast from "~/components/misc/CartToast"
import Carousel from "~/components/Carousel/Carousel"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const { addProductToCart } = useContext(StoreContext)
  const minVariant = product.variants.filter(
    variant =>
      Number(variant.price) ===
      Number(product.priceRange.minVariantPrice.amount)
  )
  // console.log(minVariant)
  const [selectedVariant, setSelectedVariant] = useState(minVariant[0])

  const [displayToast, setDisplayToast] = useState(false)

  const [selectedImage, setSelectedImage] = useState(
    product.images[0].localFile.childImageSharp.original.src
  )
  // console.log(product)
  // console.log(data)
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  const handleSelectVariant = e => {
    setSelectedVariant(product.variants[e.target.value])
  }
  const images = product.images.map(
    node => node.localFile.childImageSharp.original.src
  )
  // console.log(window)
  return (
    <Layout>
      {/* <div style={{ minHeight: "50vh" }}>
        <button onClick={() => addProductToCart(product.variants[0].shopifyId)}>
          Add To Cart
        </button>
        <h1>{product.title}</h1>
        <div>{product.description}</div>
      </div> */}
      <SEO
        pageDesc={product.description}
        pageTitle={`${product.title}: Simmons Gun Repair`}
      />

      <section css={tw`text-gray-700 overflow-hidden`}>
        <div css={tw`container px-5 py-24 mx-auto`}>
          <div css={tw` mx-auto flex flex-wrap justify-center`}>
            {/* <ProductImages shopifyId={selectedVariant.shopifyId} /> */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            >
              {images.length > 1 ? (
                <Carousel images={images} />
              ) : (
                <img
                  // style={{ maxHeight: "500px" }}
                  alt="Product"
                  css={tw`w-full lg:h-auto object-scale-down object-top rounded`}
                  src={selectedImage}
                />
              )}

              {/* images.map((image, index) => (
                  <div
                    className="thumbnailDiv"
                    css={tw`hocus:cursor-pointer`}
                    style={{
                      height: "50px",
                      width: "50px",
                      margin: "1em",
                      marginLeft: "0",
                    }}
                    key={index}
                    onClick={e => {
                      console.log(e.target)
                      setSelectedImage(image)
                    }}
                  >
                    <img alt="product thumbnail" src={image} />
                  </div>
                )) */}
            </div>

            <div
              css={tw`md:w-3/4 lg:w-1/2 w-full xl:pl-10 lg:py-6 mt-6 lg:mt-0`}
            >
              <h2 css={tw`text-sm text-gray-500 tracking-widest`}>SIMMONS</h2>
              <h1 css={tw`text-gray-900 text-3xl  font-medium mb-1`}>
                {product.title}
              </h1>

              <div
                className="productDescription"
                css={tw`leading-relaxed md:w-11/12`}
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <div
                css={tw`flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5`}
              >
                <div css={tw`flex  items-center`}>
                  {product.variants.length > 1 && (
                    <span css={tw`mr-3 capitalize`}>
                      {product.variants[0].selectedOptions[0].name}
                    </span>
                  )}

                  <div style={{ position: "relative" }}>
                    {product.variants.length > 1 && (
                      <select
                        // defaultValue={minVariant[0].title}
                        onChange={handleSelectVariant}
                        css={tw`rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10`}
                      >
                        {/* <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option> */}
                        {product.variants.map((variant, index) =>
                          variant.title === minVariant[0].title ? (
                            <option selected value={index} key={index}>
                              {variant.title}
                            </option>
                          ) : (
                            <option value={index} key={index}>
                              {variant.title}
                            </option>
                          )
                        )}
                      </select>
                    )}
                    {product.variants.length > 1 && (
                      <span
                        css={tw`absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center`}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          css={tw`w-4 h-4`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span css={tw`font-medium text-2xl text-gray-900`}>
                  {selectedVariant.price
                    ? `$${numberWithCommas(selectedVariant.price)}`
                    : null}
                </span>

                <button
                  onClick={() => {
                    const Qty = Number(document.querySelector("#cartQty").value)
                    if (Qty >= 1) {
                      setDisplayToast(true)
                      addProductToCart(selectedVariant.shopifyId, Qty)
                    }
                  }}
                  css={tw`flex ml-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded`}
                >
                  Add to Cart
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="updatesCartSmall">Qty:</label>

                <input
                  id="cartQty"
                  style={{
                    width: "3rem",
                    height: "1.5rem",
                    padding: "5px 4px",
                    marginLeft: ".5rem",
                  }}
                  type="number"
                  name="updatesCartSmall"
                  defaultValue="1"
                  min="1"
                  pattern="[1-9]*"
                />
              </div>
              <CartToast open={displayToast} setOpen={setDisplayToast} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     shopifyProduct(
//       shopifyId: { eq: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzUyOTE0NjU0NDE0MzE=" }
//     ) {
//       images {
//         localFile {
//           childImageSharp {
//             thumb: fluid(
//               maxWidth: 270
//               maxHeight: 270
//               quality: 100
//               cropFocus: CENTER
//             ) {
//               ...GatsbyImageSharpFluid
//             }
//             full: fluid(maxWidth: 1024, quality: 100, cropFocus: CENTER) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
export default ProductTemplate
