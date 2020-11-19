import React from "react"
import Layout from "../components/Layout/Layout"
import TwoColumnPrimaryBackground from "../components/faqs/TwoColumnPrimaryBackground"
import SEO from "~/components/SEO/SEO"

export default function Faq() {
  return (
    <Layout>
      <SEO
        pageDesc="Answers to the most frequently asked questions at Simmons Gun Repair. Still have a question? Contact us."
        pageTitle={"Frequently Asked Questions - Simmons Gun Repair"}
      />
      <TwoColumnPrimaryBackground />
    </Layout>
  )
}
