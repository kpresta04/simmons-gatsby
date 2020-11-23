import React, { useContext } from "react"
import "tailwindcss/dist/base.css"
import "../styles/globalStyles.css"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import Hero from "../components/hero/TwoColumnWithVideo.js"
// import Features from "../components/features/ThreeColSimple.js"
import MainFeature from "../components/features/TwoColWithButton.js"
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js"
// import TabGrid from "../components/cards/TabCardGrid.js"
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js"
import Footer from "../components/footers/FiveColumnDark.js"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import PopupModal from "~/components/Modal/PopupModal"
import SEO from "~/components/SEO/SEO"

export const query = graphql`
  query MyQuery {
    smithing: file(relativePath: { eq: "smithing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    handgun: file(relativePath: { eq: "handgun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gunrack: file(relativePath: { eq: "gunrack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default ({ data }) => {
  const Subheading = tw.span`tracking-wider text-sm font-medium text-blue-900`
  const HighlightedText = tw.span`text-blue-700 inline-block`
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`
  const Description = tw.span`inline-block mt-8`
  const imageCss = tw`rounded-4xl`
  // const { addProductToCart } = useContext(StoreContext)
  // const logoSmall = data.logoSmall.childImageSharp
  // console.log(data)
  const isBrowser = typeof window !== "undefined"
  let modalSubmitted
  if (isBrowser) {
    modalSubmitted = JSON.parse(sessionStorage.getItem("modalSubmitted"))
  } else {
    modalSubmitted = false
  }

  return (
    <AnimationRevealPage>
      <SEO />
      <Hero
        heading={
          <>
            Professional gunsmithing for
            <wbr /> <HighlightedText>over 75 years.</HighlightedText>
          </>
        }
        description=""
        // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageSrc={data.smithing.childImageSharp.fluid}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Shipping"
        primaryButtonUrl="/product/shipping-box"
      />
      {modalSubmitted !== true ? <PopupModal /> : null}

      <MainFeature
        subheading={<Subheading>Established In 1945</Subheading>}
        heading={
          <>
            Serving Customers
            <HighlightedText>Nationwide</HighlightedText>
          </>
        }
        description={
          <Description>
            You don't need to be a local - you can shop with us no matter where
            you live, and rest easy knowing our secure shipping box will protect
            your firearm in transit.
          </Description>
        }
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        primaryButtonUrl="/shop"
        imageSrc={data.handgun.childImageSharp.fluid}
        imageCss={imageCss}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* <TabGrid
        heading={
          <>
            Latest <HighlightedText> products</HighlightedText>
          </>
        }
      /> */}
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        description="Our highly trained gunsmiths have the expertise to restore your firearm to the maximum standard.  Satisfaction guaranteed!"
        heading={
          <>
            Standard of <HighlightedText>Excellence</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Repairs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="/shop"
        imageInsideDiv={false}
        // imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageSrc={data.gunrack.childImageSharp.fluid}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={false}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />

      <Footer />
    </AnimationRevealPage>
  )
}
