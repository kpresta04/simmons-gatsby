import React from "react"
import Layout from "~/components/Layout/Layout"
import StatsWithImage2 from "~/components/features/TwoColSingleFeatureWithStats2"
import SEO from "~/components/SEO/SEO"
import { graphql } from "gatsby"

export const query = graphql`
  {
    buildPhoto: file(relativePath: { eq: "build5.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default function BuildClasses({ data }) {
  return (
    <Layout>
      <SEO
        pageDesc="Come build your very own AR-15 with the guidance of our smiths! Approximately 2-hour class with social time at the end. Call now for class dates and times and to sign up for the next class!"
        pageTitle={"AR-15 Build Classes - Simmons Gun Repair"}
      />
      <StatsWithImage2
        imageSrc={data.buildPhoto.childImageSharp.fluid}
      ></StatsWithImage2>
    </Layout>
  )
}
