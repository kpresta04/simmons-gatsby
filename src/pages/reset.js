import React, { useContext, useState } from "react"
import fetchGraphQL from "~/utils/fetchGraphQL"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line

const isBrowser = typeof window !== "undefined"

const Heading = tw.h1`text-2xl text-center xl:text-3xl font-extrabold mb-12`

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

export default function Reset() {
  const user = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState(null)
  const [successful, setSuccessful] = useState(false)

  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        <Form
          onSubmit={async e => {
            e.preventDefault()
            let password = document.querySelector("#password").value
            let pwConfirm = document.querySelector("#passwordConfirm").value
            if (errorMsg) {
              setErrorMsg(null)
            }

            if (isBrowser && password === pwConfirm) {
              const queryString = window.location.search
              const urlParams = new URLSearchParams(queryString)
              const reset_url = urlParams.get("reset_url")
              const response = await user.resetPasswordByURL(
                password,
                reset_url
              )

              if (response) {
                setSuccessful(true)
              }
            } else {
              setErrorMsg("Passwords don't match")
            }
          }}
          style={{ marginTop: "7rem" }}
        >
          <Heading>Enter New Password</Heading>

          <Input
            id="password"
            required
            type="password"
            placeholder="Password"
            pattern=".{8,}"
            title="8 characters minimum"
          />
          <Input
            id="passwordConfirm"
            required
            type="password"
            placeholder="Confirm password"
            pattern=".{8,}"
            title="8 characters minimum"
          />

          <SubmitButton type="submit">
            <span className="text">Reset password</span>
          </SubmitButton>
        </Form>
        <p tw="text-red-700 mt-4 text-center">{errorMsg}</p>

        {successful && (
          <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
            Password was reset successfully! You can now log in.
          </h1>
        )}
      </div>
    </Layout>
  )
}
