import React, { useState } from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"
import styled, { css } from "styled-components/macro" //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js"
import { SectionDescription } from "../misc/Typography.js"
import ChevronDownIcon from "../../images/chevron-down.svg"

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-white text-blue-900`

const HeadingContainer = tw.div``
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`
const Heading = tw(SectionHeading)``
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`
const Faq = tw.div`select-none cursor-pointer border-b-2 border-blue-700 hover:border-blue-500 transition-colors duration-300 py-6`
const Question = tw.div`flex justify-between items-center`
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-blue-900`

export default ({
  subheading = "",
  heading = "Frequently Asked Questions",
  description = "",
  faqs = [
    {
      question:
        "What are the delivery charges for orders from the Online Shop?",
      answer:
        "We will ship the firearm container and box to you free of charge AND pay the return freight. You only pay the freight to receive the repaired firearm after finished. All other products or services are priced based on weight, length and distance of shipping.",
    },
    {
      question: "Which payment methods are accepted in the Online Shop?",
      answer:
        "We accept major credit cards and we can accept PayPal purchases as well.",
    },
    {
      question: "How long will delivery take?",
      answer:
        "Firearm purchases will take less than 1 week. Repairs will be quoted on a case by case basis.",
    },
    {
      question: "How secure is shopping in the Online Shop?",
      answer:
        "All data is encrypted and secure. Our site is state of the art and you can have true peace of mind when shopping online with us.",
    },
    {
      question: "What exactly happens after ordering? ",
      answer:
        "Firearm purchases are immediately pulled from our warehouse and shipped directly to your FFL in the town you are located in. For gun repairs, shipping containers are sent directly to you with a prepaid label for you to ship them to us. When your repair is finished, we will ship your firearm directly back to you in the container you bought.",
    },
    {
      question: "Do I receive an invoice for my order?",
      answer:
        "Yes. You will receive an online invoice at the time of purchase, and another copy will arrive with your firearm or related purchase.",
    },
  ],
}) => {
  const faqCol1 = []
  const faqCol2 = []
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null)
    else setActiveQuestionIndex(questionIndex)
  }

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 },
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              marginTop: "16px",
              display: "block",
            },
            collapsed: {
              opacity: 0,
              height: 0,
              marginTop: "0px",
              display: "none",
            },
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    )

    if (index % 2 === 0) faqCol1.push(renderedFaq)
    else faqCol2.push(renderedFaq)

    return null
  })
  return (
    <PrimaryBackgroundContainer style={{ minHeight: "85vh" }}>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  )
}
