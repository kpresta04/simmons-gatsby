import React from "react"
import AnimationRevealPage from "../../helpers/AnimationRevealPage"
import Header from "../headers/light"
import Footer from "../footers/FiveColumnDark"
import SEO from "~/components/SEO/SEO"

export default function Layout({ children }) {
  return (
    <AnimationRevealPage disabled>
      <SEO />
      <Header />
      {children}
      <Footer />
    </AnimationRevealPage>
  )
}
