import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import Header from "../components/headers/light"
import Footer from "../components/footers/FiveColumnDark"
import About from "../components/features/TwoColSingleFeatureWithStats"
import SEO from "~/components/SEO/SEO"

export default function about({ data }) {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <SEO
        pageDesc="Store location and information. Professional gunsmithing since 1945."
        pageTitle={"About Us - Simmons Gun Repair"}
      />
      <About />
      <Footer />
    </AnimationRevealPage>
  )
}
