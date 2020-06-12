import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import Header from "../components/headers/light.js"
import Footer from "../components/footers/FiveColumnDark.js"
import ContactUsForm from "../components/forms/SimpleContactUs.js"

const Address = tw.span`leading-relaxed`
const AddressLine = tw.span`block`
const Email = tw.span`text-sm mt-6 block text-gray-500`
const Phone = tw.span`text-sm mt-0 block text-gray-500`

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <ContactUsForm />

      <Footer />
    </AnimationRevealPage>
  )
}
