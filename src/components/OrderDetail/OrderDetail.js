import React from "react"
import moment from "moment"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { prod } from "mathjs"
import OrderTable from "~/components/OrderTable/OrderTable"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

export default function OrderDetail({ order, selectOrder, email = "" }) {
  // console.log(order)
  return (
    <div>
      <Heading>My Account - {email}</Heading>
      <button
        style={{
          fontSize: "15px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          margin: "0 auto 3rem auto",
        }}
        onClick={() => {
          selectOrder(null)
        }}
      >
        Return to Account Details
      </button>

      <div
        style={{
          // width: "fit-content",
          margin: "0 auto",
          width: "100%",
          maxWidth: "800px",
        }}
      >
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
          Order #{order.node !== undefined && order.node.orderNumber}
        </h2>
        <p
          style={{
            marginBottom: "19.4px",

            textAlign: "left",
          }}
        >
          Placed on{" "}
          {order.node !== undefined &&
            moment(order.node.processedAt.slice(0, 10)).format("MMMM Do YYYY")}
        </p>
        <table
          className="order-table"
          style={{ margin: "0 auto", width: "100%" }}
        >
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
            {order.node !== undefined &&
              order.node.lineItems.edges.map((product, index) => (
                <tr key={index}>
                  <th
                    className="order-table__product"
                    scope="row"
                    data-label="Product"
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {product.node.title}
                    </span>
                    <br />

                    {product.node.variant.title !== "Default Title" ? (
                      <p>{product.node.variant.title}</p>
                    ) : null}
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
              <th scope="row" colSpan="3">
                Subtotal
              </th>
              <td className="text-right" data-label="Subtotal">
                {order.node !== undefined && order.node.subtotalPrice}
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan="3">
                Shipping
              </th>
              <td className="text-right" data-label="Shipping (Standard)">
                {order.node !== undefined && order.node.totalShippingPrice}
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan="3">
                Tax
              </th>
              <td className="text-right" data-label="Tax">
                {order.node !== undefined && order.node.totalTax}
              </td>
            </tr>

            <tr>
              <th scope="row" colSpan="3">
                Total
              </th>
              <td className="text-right" data-label="Total">
                {order.node !== undefined && order.node.totalPrice}
              </td>
            </tr>
          </tfoot>
        </table>
        {/* <OrderTable orderData={order} /> */}
        <div
          style={{
            marginBottom: "3rem",

            display: "grid",
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
          <p>{order.node !== undefined && order.node.shippingAddress.name}</p>
          {order.node !== undefined &&
            order.node.shippingAddress.formatted.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </div>
  )
}
