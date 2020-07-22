import React, { useContext } from "react"
import fetchGraphQL from "~/utils/fetchGraphQL"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import tw from "twin.macro"
import styled from "styled-components"

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`
const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`

export default function Recover() {
  const user = useContext(UserContext)
  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        <Form style={{ marginTop: "7rem" }}>
          <Input id="email" required type="email" placeholder="Email" />
          <SubmitButton type="submit">
            <span className="text">Submit</span>
          </SubmitButton>
        </Form>
      </div>
    </Layout>
  )
}
