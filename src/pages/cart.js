import React, { useContext } from "react"
import StoreContext from "~/context/StoreContext"
import Layout from "~/components/Layout/Layout"
import tw from "twin.macro"

const Title = tw.h4`text-lg font-bold`
const Header = tw.h1`text-3xl text-center my-12 font-bold`

export default function Cart() {
  const { isCartOpen, cart, checkout, removeProductFromCart } = useContext(
    StoreContext
  )

  console.log(checkout.lineItems)
  console.log(checkout)
  return (
    <Layout>
      <div
        style={{
          minHeight: "70vh",
        }}
      >
        <Header>Cart</Header>
        {checkout.lineItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
              margin: "2rem 0",
            }}
          >
            <img
              style={{ height: "64px", width: "64px" }}
              src={item.variant.image.src}
              alt="Product"
            ></img>
            <Title>{item.title}</Title>
            <h1 style={{ margin: "0 1rem" }}>Qty: {item.quantity}</h1>
            <h1>${item.variant.price}</h1>
            <button
              onClick={() => removeProductFromCart(item.id)}
              style={{ margin: "0 3rem" }}
            >
              X
            </button>
          </div>
        ))}
        <hr style={{ maxWidth: "50%", margin: "1rem auto" }} />
        <h3>{checkout.totalPrice}</h3>
        <a href={checkout.webUrl}>Checkout Now</a>
      </div>
    </Layout>
  )
}
