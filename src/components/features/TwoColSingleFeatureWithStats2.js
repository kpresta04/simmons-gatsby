import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js"
import PhoneIcon from "~/images/phone-call.svg"

import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js"
import StatsIllustrationSrc from "~/images/stats-illustration.svg"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
])
const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center text-blue-700 md:text-left`
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`
const Key = tw.div`font-medium text-blue-700`

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm  mx-auto md:mx-0`

export default ({
  subheading = "Learn with the Pros",
  heading = (
    <>
      Simmons AR-15 Building Class
      {/* <span tw="text-primary-500">1999.</span> */}
    </>
  ),
  description = "Come build your very own AR-15 with the guidance of our smiths! Approximately 2-hour class with social time at the end. Call now for class dates and times and to sign up for the next class!",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+",
    },
    {
      key: "Projects",
      value: "3891+",
    },
    {
      key: "Awards",
      value: "1000+",
    },
  ]

  if (!statistics) statistics = defaultStatistics

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          <Img fluid={imageSrc} css={imageCss} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            {/* <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics> */}
            <PrimaryButton
              className="callNowButton"
              style={{
                width: "10rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              as="a"
              href="tel:9137823131"
            >
              <span
                style={{
                  height: "24px",
                  fontSize: "1rem",
                }}
              >
                Call Now
              </span>

              <PhoneIcon />
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
