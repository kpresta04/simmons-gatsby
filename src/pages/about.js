import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage"
import Header from "../components/headers/light"
import Footer from "../components/footers/FiveColumnDark"
import About from "../components/features/TwoColSingleFeatureWithStats"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    deerPhoto: file(relativePath: { eq: "deerPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function about({ data }) {
  return (
    <AnimationRevealPage disabled>
      <Header />

      <About image={data.deerPhoto} />
      <Footer />
    </AnimationRevealPage>
  )
}
