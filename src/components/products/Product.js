import React from "react"

import Layout from "../Layout/Layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <Layout>
      <div style={{ minHeight: "50vh" }}>
        <h1>{product.title}</h1>
        <div>{product.description}</div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
