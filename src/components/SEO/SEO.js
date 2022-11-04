import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({
  pageDesc = "Simmons Gun Repair & Sales has been repairing firearms & putting our Simmons Floating Vent Ribs on shotguns since 1945. Call or visit today!",
  pageTitle = "Simmons Gun Repair- Olathe Gun Shop & Firearm Repair | Kansas City",
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={pageDesc}></meta>
      <title>{pageTitle}</title>
    </Helmet>
  )
}
