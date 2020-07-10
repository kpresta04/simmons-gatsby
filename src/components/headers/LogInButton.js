import React from "react"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import { NavLink } from "./light"
import { useIdentityContext } from "react-netlify-identity-widget"

export default function LogInButton({ setDialog }) {
  const identity = useIdentityContext()

  if (!identity.isLoggedIn) {
    return <NavLink to="/login">Login</NavLink>
  } else {
    return (
      <button
        onClick={() => {
          identity.logoutUser()
        }}
        css={tw`text-xl! my-2 lg:text-base lg:mx-6 lg:my-0 
			  font-semibold tracking-wide transition duration-300 hocus:outline-none
			  pb-1 border-b-2 border-transparent hover:border-blue-900 hocus:text-blue-800`}
      >
        Logout
      </button>
    )
  }
}
