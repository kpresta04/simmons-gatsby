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
  const [checkoutId, setCheckoutId] = useState({})

  const initializeCheckout = async () => {
    try {
      const newCheckout = await client.checkout.create()
      setCheckoutId(newCheckout.id)
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
      const addItems = await client.checkout.addLineItems(checkoutId, lineItems)
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
