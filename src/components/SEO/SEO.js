import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({
  pageDesc = "Professional gunsmithing since 1945.",
  pageTitle = "Simmons Gun Repair",
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={pageDesc}></meta>
      <title>{pageTitle}</title>
    </Helmet>
  )
}
