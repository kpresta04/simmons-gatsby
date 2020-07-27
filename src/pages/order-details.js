import React, { useContext, useState, useEffect } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate } from "gatsby"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import fetchGraphQL from "~/utils/fetchGraphQL"
import { Link } from "gatsby"
import OrderDetail from "~/components/OrderDetail/OrderDetail"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

const OrderDetails = ({ location }) => {
  const user = useContext(UserContext)
  console.log(location.state)

  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        <Heading>My Account</Heading>
        <Link
          style={{
            fontSize: "15px",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            margin: "0 auto 3rem auto",
          }}
          to="/account"
        >
          Return to Account Details
        </Link>
        <OrderDetail order={location.state} />
      </div>
    </Layout>
  )
}

export default OrderDetails
