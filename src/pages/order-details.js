import React, { useContext, useState, useEffect } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate } from "gatsby"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import fetchGraphQL from "~/utils/fetchGraphQL"
import { Link } from "gatsby"
import moment from "moment"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

const OrderDetails = ({ location }) => {
  const user = useContext(UserContext)
  //   console.log(location.state)

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
        <h2
          style={{
            fontSize: " 1.33333em",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: "bold",
            marginBottom: "17.5px",
          }}
        >
          Order #{location.state.node && location.state.node.orderNumber}
        </h2>
        <p style={{ marginBottom: "19.4px" }}>
          Placed on{" "}
          {location.state.node &&
            moment(location.state.node.processedAt.slice(0, 10)).format(
              "MMMM Do YYYY"
            )}
        </p>
        <table className="order-table">
          <thead>
            <tr>
              <th scope="col">Product</th>

              <th className="text-right" scope="col">
                Price
              </th>
              <th className="text-right" scope="col">
                Quantity
              </th>
              <th className="text-right" scope="col">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {location.state.node &&
              location.state.node.lineItems.edges.map((product, index) => (
                <tr key={index}>
                  <th
                    className="order-table__product"
                    scope="row"
                    data-label="Product"
                  >
                    {product.node.title}
                  </th>
                  <td className="text-right" data-label="Price">
                    {product.node.variant.price}
                  </td>
                  <td className="text-right" data-label="Quantity">
                    {product.node.quantity}
                  </td>
                  <td className="text-right" data-label="Total">
                    {product.node.variant.price * product.node.quantity}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="small--hide" scope="row" colSpan="3">
                Subtotal
              </th>
              <td className="text-right" data-label="Subtotal">
                {location.state.node && location.state.node.subtotalPrice}
              </td>
            </tr>
            <tr>
              <th className="small--hide" scope="row" colSpan="3">
                Shipping
              </th>
              <td className="text-right" data-label="Shipping (Standard)">
                {location.state.node && location.state.node.totalShippingPrice}
              </td>
            </tr>
            <tr>
              <th className="small--hide" scope="row" colSpan="3">
                Tax
              </th>
              <td className="text-right" data-label="Tax">
                {location.state.node && location.state.node.totalTax}
              </td>
            </tr>

            <tr>
              <th className="small--hide" scope="row" colSpan="3">
                Total
              </th>
              <td className="text-right" data-label="Total">
                {location.state.node && location.state.node.totalPrice}
              </td>
            </tr>
          </tfoot>
        </table>
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.7em",
              textTransform: "none",
              letterSpacing: "0",
              margin: "3rem 0 1rem 0",
            }}
          >
            Shipping Address
          </h3>
          <p>
            {location.state.node && location.state.node.shippingAddress.name}
          </p>
          {location.state.node &&
            location.state.node.shippingAddress.formatted.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default OrderDetails
