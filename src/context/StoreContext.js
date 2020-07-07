import React, { useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "simmons-gun-repairs.myshopify.com",
  storefrontAccessToken: "80ec29390ee7217adbe1cb9b5b4f0e4a",
})
const defaultContext = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {},
  client,
}

const StoreContext = React.createContext(defaultContext)

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({})

  const initializeCheckout = async () => {
    try {
      const isBrowser = typeof window !== "undefined"

      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        //if checkout id exists
        newCheckout = await client.checkout.fetch(currentCheckoutId)
      } else {
        //else create a new one
        newCheckout = await client.checkout.create()

        if (isBrowser) {
          localStorage.setItem("checkout_id", newCheckout.id)
        }
      }

      setCheckout(newCheckout)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    initializeCheckout()
  }, [])

  const addProductToCart = async variantId => {
    try {
      // const newCheckout = await client.checkout.create()
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const addItems = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // Buy Now Button Code
      // window.open(addItems.webUrl, "_blank")
      console.log(addItems.webUrl)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultContext,
        addProductToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
export default StoreContext
