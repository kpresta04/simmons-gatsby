import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import { ContentWithPaddingXl, Container } from "../misc/Layouts.js"
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js"

const Subheading = tw(SubheadingBase)`text-center`
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`
const Image = tw.img`w-20 h-20 rounded-full`
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`

export default ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "My dad sent all of his shotguns to Simmons forever, and now, so do I.",
      customerName: "William Ferguson",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "I like Simmons new shipping service.  I can now order online and get a box and container shipped right to me with a return label.  So easy to do businsess via the mail.",
      customerName: "Phillip Bradley",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote: "Check out Simmons' new website. It's so cool!",
      customerName: "Pete Smith",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                {/* <Image src={testimonial.imageSrc} /> */}
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>
    </Container>
  )
}
