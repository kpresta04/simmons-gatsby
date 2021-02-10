import React, { useState } from "react"
import Layout from "~/components/Layout/Layout"
import SEO from "~/components/SEO/SEO"
import tw from "twin.macro"
import { graphql } from "gatsby"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

export const query = graphql`
  query {
    services: allContentfulSimmonsService(
      limit: 1000
      sort: { fields: createdAt }
    ) {
      edges {
        node {
          name
          price
        }
      }
    }
  }
`
export default function Services({ data }) {
  const [serviceList, setServiceList] = useState(data.services.edges)

  return (
    <Layout>
      <SEO
        pageDesc="Full list of professional Gunsmithing services and prices at Simmons Gun Repair"
        pageTitle={"Gunsmithing Services - Simmons Gun Repair"}
      />

      <div style={{ minHeight: "70vh" }}>
        <Heading>Gunsmithing Services & Pricing </Heading>
        <table
          width="356"
          style={{ margin: "3rem auto", width: "100%", maxWidth: "1000px" }}
        >
          <thead>
            <tr>
              <th colSpan="2" width="292">
                Description
              </th>

              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {serviceList.map((item, index) => (
              <tr key={index}>
                <td
                  colSpan="2"
                  width="292"
                  css={
                    item.node.name ===
                    "INTERNET SPECIAL: SIMMONS FLOATING RIB, REBLUE, JEWEL BOLT/CARRIER, MEDIUM FANCY WOOD"
                      ? tw`font-bold`
                      : tw`font-normal`
                  }
                >
                  {item.node.name}
                </td>
                <td width="64">{item.node.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
