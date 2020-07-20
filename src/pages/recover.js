import React from "react"
import fetchGraphQL from "~/utils/fetchGraphQL"
import Layout from "~/components/Layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"

export default function Recover() {
  const identity = useIdentityContext()

  return (
    <Layout>
      <button
      // onClick={async () => {
      //   const response = await fetchGraphQL(mutation)
      //   const { data, errors } = response.data
      //   console.log(data)
      //   console.log(errors)

      //   identity
      //     // .requestPasswordRecovery("kpresta04@gmail.com")
      //     // .then(response => console.log("Recovery email sent", { response }))
      //     // .catch(error =>
      //     //   console.log("Error sending recovery mail: %o", error)
      //     // )
      //     .updateUser( user_metadata: { full_name: "kellen presta" } )
      //     .then(user => console.log(user))
      //     .catch(error => {
      //       console.log("Failed to update user: %o", error)
      //     })
      // }}

      //
      //
      >
        click here
      </button>
    </Layout>
  )
}
