import React from "react"
import Layout from "~/components/Layout/Layout"
import StatsWithImage2 from "~/components/features/TwoColSingleFeatureWithStats2"
import SEO from "~/components/SEO/SEO"

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
      <StatsWithImage2
        imageSrc={data.buildPhoto.childImageSharp.fluid}
      ></StatsWithImage2>
    </Layout>
  )
}
