import React from "react"
import AnimationRevealPage from "../../helpers/AnimationRevealPage"
import Header from "../headers/light"
import Footer from "../footers/FiveColumnDark"

export default function Layout({ children }) {
  return (
    <AnimationRevealPage disabled>
      <Header />
      {children}
      <Footer />
    </AnimationRevealPage>
  )
}
