import React, { useContext } from "react"
import Layout from "~/components/Layout/Layout"
import UserContext from "~/context/UserContext"
import { navigate } from "gatsby"

const Account = () => {
  const user = useContext(UserContext)

  return (
    <Layout>
      <div>
        <p>This is going to be a protected route.</p>
        <button
          onClick={() => {
            user.logOutUser()
            navigate("/")
          }}
        >
          Log Out
        </button>
      </div>
    </Layout>
  )
}

export default Account
