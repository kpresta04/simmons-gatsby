import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import Header from "../components/headers/light.js"
import Footer from "../components/footers/FiveColumnDark.js"
import ContactUsForm from "../components/forms/SimpleContactUs.js"
import SEO from "~/components/SEO/SEO"

const Address = tw.span`leading-relaxed`
const AddressLine = tw.span`block`
const Email = tw.span`text-sm mt-6 block text-gray-500`
const Phone = tw.span`text-sm mt-0 block text-gray-500`

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <SEO
        pageDesc="Have a question about a product or looking for a quote on a repair? Make inquiries to the experts at Simmons Gun Repair."
        pageTitle={"Contact Us - Simmons Gun Repair"}
      />
      <ContactUsForm />

      <Footer />
    </AnimationRevealPage>
  )
}
