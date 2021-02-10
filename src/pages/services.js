import React, { useEffect, useState } from "react"
import Layout from "~/components/Layout/Layout"
import SEO from "~/components/SEO/SEO"
import tw from "twin.macro"
import axios from "axios"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

export default function Services() {
  const [serviceList, setServiceList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "get",
        url:
          "https://cdn.contentful.com/spaces/bi7okob4zwzp/environments/master/entries?content_type=simmonsService&limit=1000&order=sys.createdAt",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      })

      // console.log(data.items)
      setServiceList(data.items)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <SEO
        pageDesc="Full list of professional Gunsmithing services and prices at Simmons Gun Repair"
        pageTitle={"Gunsmithing Services - Simmons Gun Repair"}
      />

      <div style={{ minHeight: "100vh" }}>
        {/* <table width="637">
          <tbody>
            <tr>
              <td width="441">
                <strong>Description</strong>
              </td>
              {/* <td width="92">&nbsp;</td> */}
        {/* <td width="104">
                <strong>Price</strong>
              </td>
            </tr>
            {/* <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr> 
            <tr>
              <td colSpan="2">  
			*/}
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
                <td colSpan="2" width="292">
                  {item.fields.name}
                </td>
                <td width="64">{item.fields.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
