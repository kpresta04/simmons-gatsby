import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-900 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`
const Column = tw.div`sm:w-5/12 flex flex-col`
const InputContainer = tw.div`relative py-5 mt-6`
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`
const Input = tw.input`hocus:border-blue-700! bg-white! text-black!`
const TextArea = tw.textarea`h-24 sm:h-full resize-none hocus:border-blue-700! bg-white! text-black!`
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-blue-900 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-blue-700 hocus:-translate-y-px hocus:shadow-xl`

export default () => {
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Contact Us</h2>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      required
                      name="email"
                      placeholder="john@mail.com"
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      required
                      placeholder="E.g. inquiries about products or repairs"
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">
                Submit
              </SubmitButton>
            </form>
          </div>
        </FormContainer>
      </Content>
    </Container>
  )
}
