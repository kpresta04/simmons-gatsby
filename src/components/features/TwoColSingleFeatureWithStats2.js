import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js"
import { InlineWidget } from "react-calendly"
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js"
import StatsIllustrationSrc from "~/images/stats-illustration.svg"
import { StaticImage } from "gatsby-plugin-image"
import "./feat.css"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`
const TextColumn = styled(Column)(props => [
  tw`mt-16 md:w-7/12 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-full bg-center bg-no-repeat bg-contain rounded`,
])
const TextContent = tw.div`text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center text-blue-700 md:text-left`
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`
const Key = tw.div`font-medium text-blue-700`
const CalendlyDiv = tw.div`w-10`

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm  mx-auto md:mx-0`

export default ({
  subheading = "Learn with the Pros",
  heading = <>Simmons AR-15 Building Class</>,
  description = "Come build your very own AR-15 with the guidance of our smiths! Approximately 2-hour class with social time at the end. Call now for class dates and times and to sign up for the next class!",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  image = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
  calendly = false,
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
      <TwoColumn
        style={{ minHeight: "1000px" }}
        css={!imageInsideDiv && tw`md:items-center`}
      >
        <ImageColumn css={imageContainerCss}>
          <StaticImage src="../../images/build5.png" alt="A dinosaur" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {calendly ? (
              <CalendlyDiv
                id="calendly"
                style={{
                  width: "100%",
                }}
              >
                <InlineWidget
                  styles={{
                    height: "1200px",
                  }}
                  url="https://calendly.com/simmonsgunrepair/ar-15build"
                />
              </CalendlyDiv>
            ) : (
              <>
                <Heading>{heading}</Heading>
                {/* <Subheading>{subheading}</Subheading> */}
                <Statistics>
                  {statistics.map((statistic, index) => (
                    <Statistic key={index}>
                      <Value>{statistic.value}</Value>
                      <Key>{statistic.key}</Key>
                    </Statistic>
                  ))}
                </Statistics>
              </>
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
