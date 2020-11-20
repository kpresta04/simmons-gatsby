import React, { useContext, useEffect } from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import { Container as ContainerBase } from "../components/misc/Layouts"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import illustration from "../images/signup-illustration.svg"
import SignUpIcon from "../images/user-plus.svg"
import { graphql, Link } from "gatsby"
// import fetchGraphQL from "~/utils/fetchGraphQL"
import UserContext from "~/context/UserContext"

const Container = tw(
  ContainerBase
)`min-h-screen bg-blue-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
// const LogoLink = tw.a``
const LogoImage = tw.img` mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`

// const SocialButtonsContainer = tw.div`flex flex-col items-center`
// const SocialButton = styled.button`
//   ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
//   .iconContainer {
//     ${tw`bg-white p-2 rounded-full`}
//   }
//   .icon {
//     ${tw`w-4`}
//   }
//   .text {
//     ${tw`ml-4`}
//   }
// `

// const DividerTextContainer = tw.div`my-12 border-b text-center relative`
// const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`

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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`
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
    deerLogo: file(relativePath: { eq: "deer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoSmall: file(relativePath: { eq: "logoSmall.png" }) {
      childImageSharp {
        fixed(
          width: 115
          height: 70
          quality: 100
          cropFocus: CENTER
          fit: COVER
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ({
  logoLinkUrl = "/",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For Simmons",

  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "/login",
  data,
}) => {
  const user = useContext(UserContext)
  // console.log(user)
  useEffect(() => {
    if (user.errorMessage) {
      user.clearErrorMessage()
    }
  }, [])
  // const [errorMessage, setErrorMessage] = useState(null)

  // const signUpFunc = async () => {
  //   let email = document.querySelector("#email").value
  //   let pw = document.querySelector("#password").value
  //   const mutation = `mutation {
  //     customerCreate(input: {
  //       email: "${email}",
  //       password: "${pw}"
  //     }) {
  //       customerUserErrors {
  //         code
  //         field
  //         message
  //       }
  //       customer {
  //         id
  //       }
  //     }
  //   }`

  //   try {
  //     const response = await fetchGraphQL(mutation)

  //     let { data } = response.data
  //     console.log(data)
  //     if (data.customerCreate.customerUserErrors.length > 0) {
  //       setErrorMessage(data.customerCreate.customerUserErrors[0].message)
  //       email = ""
  //       pw = ""
  //       return
  //     }
  //     const simmonsUserID = data.customerCreate.customer.id
  //     return simmonsUserID
  //   } catch (error) {
  //     setErrorMessage(error.message)
  //   }
  // }

  // const socialButtons = [
  //   {
  //     iconImageSrc: data.googleIcon.childImageSharp.fixed.src,
  //     text: "Sign Up With Google",
  //   },
  // ]
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
                {/* hidden for now */}
                {/* <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton
                      key={index}
                      onClick={() => {
                        identity.loginProvider("google")
                      }}
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
                </SocialButtonsContainer> */}
                {/* <DividerTextContainer>
                  <DividerText>Or Sign up with your e-mail</DividerText>
                </DividerTextContainer> */}
                <Form
                  onSubmit={async e => {
                    e.preventDefault()

                    let email = document.querySelector("#email").value
                    let pw = document.querySelector("#password").value

                    user.signUpUser(email, pw)

                    //                     const userID = await signUpFunc()

                    //                     const logInMutation = `
                    //                     mutation  {
                    //   customerAccessTokenCreate(input: {
                    //       email: "${email}",
                    //       password: "${pw}"
                    //     }) {
                    //     customerUserErrors {
                    //       code
                    //       field
                    //       message
                    //     }
                    //     customerAccessToken {
                    //       accessToken
                    //       expiresAt
                    //     }
                    //   }
                    // }`
                    //                     try {
                    //                       const logInResponse = await fetchGraphQL(logInMutation)

                    //                       let { data } = logInResponse.data
                    //                       console.log(data)
                    //                       // if (data.customerAccessTokenCreate.customerUserErrors) {
                    //                       //   setErrorMessage(
                    //                       //     data.customerAccessTokenCreate.customerUserErrors[0]
                    //                       //       .message
                    //                       //   )
                    //                       //   email = ""
                    //                       //   pw = ""
                    //                       //   return
                    //                       // }
                    //                       if (!errorMessage) {
                    //                         identity
                    //                           .signupUser(email, pw, {
                    //                             id: userID,

                    //                             ...data.customerAccessTokenCreate
                    //                               .customerAccessToken,
                    //                           })
                    //                           .then(() => navigate("/"))
                    //                           .catch(err => {
                    //                             setErrorMessage(err.message.slice(12))
                    //                             email = ""
                    //                             pw = ""
                    //                             return
                    //                           })
                    //                       }
                    //                     } catch (error) {
                    //                       setErrorMessage(error.message)

                    //                       return
                    //                     }
                  }}
                >
                  <Input
                    name="email"
                    required
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    required
                    name="password"
                    pattern=".{8,}"
                    title="8 characters minimum"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="text-red-700 mt-4 text-center">{user.errorMessage}</p>

                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    By signing up you agree to abide by Simmons's{" "}
                    <Link
                      to="/terms"
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </Link>{" "}
                    and its{" "}
                    <Link
                      to="/privacy"
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </Link>
                  </p>

                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link
                      to={signInUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Sign In
                    </Link>
                  </p>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage
              imageSrc={data.deerLogo.childImageSharp.fluid.src}
            />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  )
}
