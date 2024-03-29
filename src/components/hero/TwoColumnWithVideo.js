import React, { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
//eslint-disable-next-line
import { css } from "styled-components/macro"

import Header from "../headers/light.js"
import { PrimaryButton } from "../misc/Buttons"
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js"
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js"

import DesignIllustration from "../../images/design-illustration.svg"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center w-full`

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`

const Actions = tw.div`flex items-center flex-wrap sm:flex-row justify-center lg:justify-start mt-8`

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`

// Random Decorator Blobs (shapes that you see in background)

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`absolute inset-0 flex items-center justify-center max-w-screen-xl m-4 bg-gray-200 rounded-lg outline-none xl:mx-auto sm:m-16`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`

export default ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "/shop",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",
  image = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  // console.log(image)

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton
                style={{ marginLeft: 0, width: "10rem", textAlign: "center" }}
                as={Link}
                to="/services"
              >
                Gunsmithing
              </PrimaryButton>
              <PrimaryButton
                style={{ width: "10rem", textAlign: "center" }}
                as={Link}
                to={primaryButtonUrl}
              >
                {primaryButtonText}
              </PrimaryButton>
              <PrimaryButton
                style={{ width: "10rem", textAlign: "center" }}
                as={Link}
                to="/shop"
                css={tw`lg:ml-0`}
              >
                Shop Now
              </PrimaryButton>
              <PrimaryButton
                style={{ width: "10rem", textAlign: "center" }}
                as={Link}
                to="/vip"
                css={tw`lg:ml-0`}
              >
                VIP Club
              </PrimaryButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <GatsbyImage
                css={imageCss}
                style={{ width: "100%", height: "auto" }}
                image={image}
                alt="Hero"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}></CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  )
}
