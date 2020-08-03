import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading } from "../misc/Headings.js"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
])
const TextContent = tw.div`lg:py-8`

const Heading = tw(
  SectionHeading
)`text-left text-3xl sm:text-4xl  text-center md:text-left leading-tight`
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-900 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({ textOnLeft = false, image = null }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Countries",
      value: "192",
    },
    {
      key: "Hotels",
      value: "479",
    },
    {
      key: "Rooms",
      value: "2093",
    },
    {
      key: "Workers",
      value: "10347",
    },
  ]
  return (
    <Container style={{ minHeight: "70vh" }}>
      <TwoColumn>
        <ImageColumn>
          {/* <Image imageSrc={image.childImageSharp.fluid.src} /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6212.303085214934!2d-94.79456906361274!3d38.87477453150638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0be168ec1e459%3A0x8d9751a4f3f505d8!2sSimmons%20Gun%20Repair%20%26%20Sales!5e0!3m2!1sen!2suk!4v1596463465024!5m2!1sen!2suk"
            width="100%"
            height="auto"
            frameBorder="0"
            style={{ border: "0", minHeight: "300px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Location</Heading>
            <Description>
              Find us at 700 S. Rogers Road in Olathe, Kansas.
            </Description>

            <Heading style={{ marginTop: "1em" }}>Store Hours</Heading>
            <Description>
              Monday – Friday: 9 a.m. – 5:00 p.m. CST
              <br />
              Saturday: 9:-00 a.m. – 1:00 p.m. CST
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
