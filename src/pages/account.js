import React, { useContext, useState, useEffect } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate, Link } from "gatsby"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import fetchGraphQL from "~/utils/fetchGraphQL"
import moment from "moment"
import OrderDetail from "~/components/OrderDetail/OrderDetail"

import RollingBlueIcon from "~/images/rolling-blue.svg"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

const Account = () => {
  const user = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [selectedOrder, selectOrder] = useState(null)
  // console.log(user)

  useEffect(() => {
    if (user.token !== null) {
      fetchOrderHistory()
    }
  }, [user.token])

  const fetchOrderHistory = async () => {
    const mutation = `
  query  {
    customer(customerAccessToken: "${user.token.accessToken}") {
      orders(first: 250) {
        edges {
          node {
            orderNumber
            id
            processedAt
            totalPrice
            subtotalPrice
            totalTax
            totalShippingPrice
            shippingAddress {
              name
              formatted
            }
            
            lineItems(first: 10) {
              edges {
                node {
                  quantity
                  title
                       variant {
                         title
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
      const orderData = data.customer.orders.edges
      orderData.reverse()
      // console.log(orderData)
      setLoading(false)

      setOrders(orderData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        {user.token && user.token.accessToken !== null ? (
          <div>
            {selectedOrder && (
              <OrderDetail
                selectOrder={selectOrder}
                email={user.email}
                order={selectedOrder}
              />
            )}
            {!selectedOrder && (
              <div>
                <Heading>My Account - {user.email}</Heading>
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
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <th data-label="Order" scope="row">
                            <button
                              onClick={() => {
                                selectOrder(order)
                              }}
                            >
                              #{order.node.orderNumber}
                            </button>
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
                  !loading && (
                    <h1 style={{ marginBottom: "3rem" }}>No orders found.</h1>
                  )
                )}

                <Link to="/recover">Change password</Link>
                {loading && (
                  <div>
                    <Heading>Loading Order History</Heading>
                    <RollingBlueIcon
                      style={{
                        height: "40",
                        display: "flex",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "3rem", fontSize: "2rem" }}>
              You must be logged in to view this page.
            </h1>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Account
