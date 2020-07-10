import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import { Container as ContainerBase } from "../components/misc/Layouts"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { useIdentityContext } from "react-netlify-identity-widget"

import LoginIcon from "../images/log-in.svg"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query {
    googleIcon: file(relativePath: { eq: "google-icon.png" }) {
      childImageSharp {
        fixed(height: 16, width: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitterIcon: file(relativePath: { eq: "twitter-icon.png" }) {
      childImageSharp {
        fixed(height: 16, width: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dogLogo: file(relativePath: { eq: "dogLogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoSmall: file(relativePath: { eq: "logoSmall.png" }) {
      childImageSharp {
        fixed(width: 100, height: 65, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Container = tw(
  ContainerBase
)`min-h-screen bg-blue-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const LogoImage = tw.img`h-12 mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`

const SocialButtonsContainer = tw.div`flex flex-col items-center`
const SocialButton = styled.button`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`

const DividerTextContainer = tw.div`my-12 border-b text-center relative`
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`

const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`

const logoLinkUrl = "/"
const headingText = "Sign In To Simmons"
const submitButtonText = "Sign In"
const SubmitButtonIcon = LoginIcon
const forgotPasswordUrl = "#"
const signupUrl = "/signup"
export default ({ data }) => {
  const identity = useIdentityContext()

  console.log(identity)
  const illustrationImageSrc = data.dogLogo.childImageSharp.fluid.src
  const socialButtons = [
    {
      iconImageSrc: data.googleIcon.childImageSharp.fixed.src,
      text: "Sign In With Google",
      url: "https://google.com",
    },
  ]
  console.log(data)
  return (
    <AnimationRevealPage disabled>
      <Container>
        <Content>
          <MainContainer>
            <Link to={logoLinkUrl}>
              <LogoImage src={data.logoSmall.childImageSharp.fixed.src} />
            </Link>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton
                      key={index}
                      onClick={() => identity.loginProvider("google")}
                    >
                      <span className="iconContainer">
                        <img
                          src={socialButton.iconImageSrc}
                          className="icon"
                          alt=""
                        />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>Or Sign in with your e-mail</DividerText>
                </DividerTextContainer>
                <Form>
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a
                    href={forgotPasswordUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Forgot Password ?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <Link
                    to={signupUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Sign Up
                  </Link>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  )
}
