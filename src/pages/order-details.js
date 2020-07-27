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

const OrderDetails = props => {
  const user = useContext(UserContext)
  console.log(props.location.state)

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
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: " 1.33333em",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "bold",
              marginBottom: "17.5px",
              textAlign: "left",
            }}
          >
            Order #
            {props.location.state.node !== undefined &&
              props.location.state.node.orderNumber}
          </h2>
          <p
            style={{
              marginBottom: "19.4px",

              textAlign: "left",
            }}
          >
            Placed on{" "}
            {props.location.state.node !== undefined &&
              moment(props.location.state.node.processedAt.slice(0, 10)).format(
                "MMMM Do YYYY"
              )}
          </p>
          <table className="order-table" style={{ margin: "0 auto" }}>
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
              {props.location.state.node !== undefined &&
                props.location.state.node.lineItems.edges.map(
                  (product, index) => (
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
                  )
                )}
            </tbody>
            <tfoot>
              <tr>
                <th className="small--hide" scope="row" colSpan="3">
                  Subtotal
                </th>
                <td className="text-right" data-label="Subtotal">
                  {props.location.state.node !== undefined &&
                    props.location.state.node.subtotalPrice}
                </td>
              </tr>
              <tr>
                <th className="small--hide" scope="row" colSpan="3">
                  Shipping
                </th>
                <td className="text-right" data-label="Shipping (Standard)">
                  {props.location.state.node !== undefined &&
                    props.location.state.node.totalShippingPrice}
                </td>
              </tr>
              <tr>
                <th className="small--hide" scope="row" colSpan="3">
                  Tax
                </th>
                <td className="text-right" data-label="Tax">
                  {props.location.state.node !== undefined &&
                    props.location.state.node.totalTax}
                </td>
              </tr>

              <tr>
                <th className="small--hide" scope="row" colSpan="3">
                  Total
                </th>
                <td className="text-right" data-label="Total">
                  {props.location.state.node !== undefined &&
                    props.location.state.node.totalPrice}
                </td>
              </tr>
            </tfoot>
          </table>
          <div
            style={{
              marginBottom: "3rem",

              display: "grid",
              justifyContent: "center",
            }}
          >
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
              {props.location.state.node !== undefined &&
                props.location.state.node.shippingAddress.name}
            </p>
            {props.location.state.node !== undefined &&
              props.location.state.node.shippingAddress.formatted.map(
                (line, index) => <p key={index}>{line}</p>
              )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderDetails
