import React, { useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "simmons-gun-repairs.myshopify.com",
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
})
const defaultContext = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  client,
  checkout: {
    lineItems: [],
  },
}

const StoreContext = React.createContext(defaultContext)
const isBrowser = typeof window !== "undefined"

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultContext.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (error) {
      console.log(error)
    }
  }
  const initializeCheckout = async () => {
    try {
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        //if checkout id exists
        newCheckout = await client.checkout.fetch(currentCheckoutId)

        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        //else create a new one
        newCheckout = await getNewId()
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
      setLoading(true)
      // const newCheckout = await client.checkout.create()
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // Buy Now Button Code
      // window.open(newCheckout.webUrl, "_blank")
      console.log(newCheckout.webUrl)
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }
  const removeProductFromCart = async lineItemId => {
    try {
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ])

      setCheckout(newCheckout)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultContext,
        checkout,
        addProductToCart,
        toggleCartOpen,
        removeProductFromCart,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
export default StoreContext
