import React from "react"
import { StoreProvider } from "~/context/StoreContext"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
