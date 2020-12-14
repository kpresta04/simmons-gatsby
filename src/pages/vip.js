import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "~/components/SEO/SEO"
import "~/styles/vip.css"

export default function VIP() {
  return (
    <Layout>
      <SEO
        pageDesc="Sign up now to join the Firearms Club at Simmons Gun Repair!"
        pageTitle={"Firearms Club - Simmons Gun Repair"}
      />
      <div id="vipDiv">
        <iframe
          src="https://slicktext.com/widget/v2/2001eb4d7217bd6b93e1703cc06009b7"
          width="401"
          height="1000"
          frameBorder="0"
        />
      </div>
    </Layout>
  )
}
