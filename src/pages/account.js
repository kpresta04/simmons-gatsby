import React, { useContext } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate } from "gatsby"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

const Account = () => {
  const user = useContext(UserContext)

  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        <Heading>My Account</Heading>
        <button
          style={{
            fontSize: "15px",
            textAlign: "center",
            display: "flex",
            margin: "0 auto",
          }}
          onClick={() => {
            user.logOutUser()
            navigate("/")
          }}
        >
          Log Out
        </button>
      </div>
    </Layout>
  )
}

export default Account
