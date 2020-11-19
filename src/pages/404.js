import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <div style={{ minHeight: "70vh", marginTop: "3rem" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Page not Found</h1>
        <Link style={{ textDecoration: "underline" }} to="/">
          Home page
        </Link>
      </div>
    </Layout>
  )
}
