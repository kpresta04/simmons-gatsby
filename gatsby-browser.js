import React from "react"
import { StoreProvider } from "~/context/StoreContext"
import { UserProvider } from "~/context/UserContext"

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <StoreProvider>{element}</StoreProvider>
  </UserProvider>
)
