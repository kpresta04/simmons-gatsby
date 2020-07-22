import React, { useState, useEffect } from "react"
import fetchGraphQL from "~/utils/fetchGraphQL"
import { navigate } from "gatsby"

const defaultContext = {
  email: null,
  id: null,
  token: {
    accessToken: null,
    expiresAt: null,
  },
}

const UserContext = React.createContext(defaultContext)
const isBrowser = typeof window !== "undefined"

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(defaultContext.email)
  const [userID, setUserID] = useState(defaultContext.id)
  const [userToken, setUserToken] = useState(defaultContext.token)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const userObject = { email: userEmail, id: userID, token: userToken }
  useEffect(() => {
    if (isBrowser) {
      const savedSession = JSON.parse(localStorage.getItem("user_object"))

      if (savedSession) {
        setUserEmail(savedSession.email)
        setUserID(savedSession.id)
        setUserToken(savedSession.token)
      }
    }
  }, [])

  const logInUser = async (email, pw) => {
    const logInMutation = `
	mutation  {
customerAccessTokenCreate(input: {
email: "${email}",
password: "${pw}"
}) {
customerUserErrors {
code
field
message
}
customerAccessToken {
accessToken
expiresAt
}
}
}`
    if (errorMessage) {
      setErrorMessage(null)
    }
    if (!isLoading) {
      setIsLoading(true)
    }

    try {
      const logInResponse = await fetchGraphQL(logInMutation)

      const { data } = logInResponse.data
      console.log(data)
      if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
        setErrorMessage(
          data.customerAccessTokenCreate.customerUserErrors[0].message
        )
        setIsLoading(false)
      } else {
        setUserEmail(email)
        setUserToken(data.customerAccessTokenCreate.customerAccessToken)
        setIsLoading(false)
        userObject.email = email
        userObject.token = data.customerAccessTokenCreate.customerAccessToken
        // console.log("userObject: ", userObject)

        if (isBrowser) {
          localStorage.setItem("user_object", JSON.stringify(userObject))
        }
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logOutUser = () => {
    localStorage.removeItem("user_object")
    setUserEmail(null)
    setUserID(null)
    setUserToken(null)
  }
  const signUpUser = async (email, pw) => {
    const mutation = `mutation {
      customerCreate(input: {
        email: "${email}",
        password: "${pw}"
      }) {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
        }
      }
	}`
    if (errorMessage) {
      setErrorMessage(null)
    }
    setIsLoading(true)

    try {
      const response = await fetchGraphQL(mutation)

      let { data } = response.data
      console.log(data)
      if (data.customerCreate.customerUserErrors.length > 0) {
        setErrorMessage(data.customerCreate.customerUserErrors[0].message)
        setIsLoading(false)
        email = ""
        pw = ""
      } else {
        setUserID(data.customerCreate.customer.id)
        userObject.id = data.customerCreate.customer.id

        logInUser(email, pw)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sendPasswordRecoveryEmail = async email => {
    const mutation = `mutation {
		customerRecover(email: "${email}") {
		  customerUserErrors {
			code
			field
			message
		  }
		}
	  }`

    try {
      const response = await fetchGraphQL(mutation)

      let { data } = response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserContext.Provider
      value={{
        ...defaultContext,
        email: userEmail,
        id: userID,
        token: userToken,
        logInUser,
        logOutUser,
        errorMessage,
        isLoading,
        signUpUser,
        sendPasswordRecoveryEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserContext
