import React from "react"
import "tailwindcss/dist/base.css"
import "../styles/globalStyles.css"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import Hero from "../components/hero/TwoColumnWithVideo.js"
import Features from "../components/features/ThreeColSimple.js"
import MainFeature from "../components/features/TwoColWithButton.js"
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js"
import TabGrid from "../components/cards/TabCardGrid.js"
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js"
// import DownloadApp from "../components/cta/DownloadApp.js"
import Footer from "../components/footers/FiveColumnDark.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import chefIconImageSrc from "../images/chef-icon.svg"
import celebrationIconImageSrc from "../images/celebration-icon.svg"
import shopIconImageSrc from "../images/shop-icon.svg"

export const query = graphql`
  query MyQuery {
    logoSmall: file(relativePath: { eq: "logoSmall.png" }) {
      childImageSharp {
        fixed(width: 80, height: 45) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    smithing: file(relativePath: { eq: "smithing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    handgun: file(relativePath: { eq: "handgun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gunrack: file(relativePath: { eq: "gunrack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 425) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ({ data }) => {
  const Subheading = tw.span`tracking-wider text-sm font-medium text-blue-900`
  const HighlightedText = tw.span`bg-blue-800 text-gray-100 px-4 transform -skew-x-12 inline-block`
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`
  const Description = tw.span`inline-block mt-8`
  const imageCss = tw`rounded-4xl`

  const logoSmall = data.logoSmall.childImageSharp
  console.log(data)
  return (
    <AnimationRevealPage disabled>
      <Hero
        logoImage={logoSmall}
        heading={
          <>
            Professional gunsmithing for
            <wbr /> <HighlightedText>over 75 years.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageSrc={data.smithing.childImageSharp.fluid.src}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Shop Now"
      />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={data.handgun.childImageSharp.fluid.src}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <TabGrid
        heading={
          <>
            Latest <HighlightedText> products</HighlightedText>
          </>
        }
      />
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
        heading={
          <>
            Amazing <HighlightedText>Services</HighlightedText>
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
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        // imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageSrc={data.gunrack.childImageSharp.fluid.src}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
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
