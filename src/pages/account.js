import React, { useContext, useState, useEffect } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate } from "gatsby"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import fetchGraphQL from "~/utils/fetchGraphQL"
import moment from "moment"

import RollingBlueIcon from "~/images/rolling-blue.svg"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

const Account = () => {
  const user = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user.token !== null) {
      fetchOrderHistory()
    }
  }, [user.token])

  const fetchOrderHistory = async () => {
    const mutation = `
  query  {
    customer(customerAccessToken: "${user.token.accessToken}") {
      orders(first: 5) {
        edges {
          node {
            orderNumber
            processedAt
            totalPrice
                 subtotalPrice
            totalTax
            
            
            lineItems(first: 10) {
              edges {
                node {
                  quantity
                  title
                       variant {
                    price
                  }
                  
                }
              }
            }
          }
        }
      }
    }
  }`
    try {
      const response = await fetchGraphQL(mutation)

      let { data } = response.data
      console.log(data)
      setLoading(false)

      setOrders(data.customer.orders.edges)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        <Heading>My Account</Heading>
        <button
          style={{
            fontSize: "15px",
            textAlign: "center",
            display: "flex",
            margin: "0 auto 3rem auto",
          }}
          onClick={() => {
            user.logOutUser()
            navigate("/")
          }}
        >
          Log Out
        </button>

        {!loading && (
          <h2
            style={{
              fontSize: " 1.33333em",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "bold",
              marginBottom: "17.5px",
            }}
          >
            Order History
          </h2>
        )}

        {!loading && orders.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderSpacing: "0",
              marginBottom: "27.5px",
            }}
          >
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr>
                  <th data-label="Order" scope="row">
                    #{order.node.orderNumber}
                  </th>

                  <td data-label="Date">
                    {moment(order.node.processedAt.slice(0, 10)).format(
                      "MMMM Do YYYY"
                    )}
                  </td>
                  <td data-label="Total">${order.node.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>No orders found.</h1>
        )}
        {loading && (
          <div>
            <Heading>Loading Order History</Heading>
            <RollingBlueIcon
              style={{ height: "40", display: "flex", margin: "0 auto" }}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Account