import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import Header from "../components/headers/light"
import Footer from "../components/footers/FiveColumnDark"
import About from "../components/features/TwoColSingleFeatureWithStats"

export default function about({ data }) {
  return (
    <AnimationRevealPage disabled>
      <Header />

      <About />
      <Footer />
    </AnimationRevealPage>
  )
}
