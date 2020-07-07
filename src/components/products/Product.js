import React, { useContext } from "react"
import StoreContext from "~/context/StoreContext"
import Layout from "../Layout/Layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const { addProductToCart } = useContext(StoreContext)
  console.log(product)
  return (
    <Layout>
      <div style={{ minHeight: "50vh" }}>
        <button onClick={() => addProductToCart(product.variants[0].shopifyId)}>
          Add To Cart
        </button>
        <h1>{product.title}</h1>
        <div>{product.description}</div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
