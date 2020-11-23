import React, { useContext, useEffect, useState } from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
// import logo from "../../images/logoSmall.png"
import LoginButton from "./LogInButton"
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js"
import CartCount from "~/components/misc/CartCount"
import MenuIcon from "../../images/menu.svg"
import CloseIcon from "../../images/x.svg"
import CartIcon from "~/images/shopping-cart.svg"
import UserContext from "~/context/UserContext"
// import { useIdentityContext } from "react-netlify-identity-widget"
// const logo = "https://i.ibb.co/QFLj3Sq/logo-Small.png"
// import "react-netlify-identity-widget/styles.css"
import HeaderMenu from "./headerMenu"

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto


`

export const NavLinks = tw.div`inline-block`

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = styled(Link)`
  ${tw`text-xl! my-2 lg:text-base lg:mx-6 lg:my-0 
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-900 hocus:text-blue-800`}
`
export const NavButton = styled.button`
  ${tw`text-xl! my-2 lg:text-base lg:mx-6 lg:my-0 
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-900 hocus:text-blue-800`}
`

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-blue-900 text-gray-100
  hocus:bg-blue-800 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-4!`};
`

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-blue-700 transition duration-300
`
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`)

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`

let logoLink
let links
let className
let collapseBreakpointClass = "lg"
const HeadComponent = (roundedHeaderButton = false) => {
  // const identity = useIdentityContext()
  const user = useContext(UserContext)

  // console.log(user)
  // useEffect(() => {
  //   setQuantity(quantity + 1)
  // }, [checkout])

  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      {/* <NavLink to="/shop">Shop</NavLink> */}
      <HeaderMenu />
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/build-classes">Build an AR</NavLink>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/faq">FAQ</NavLink>

      <NavLink to="/contact">Contact Us</NavLink>

      <LoginButton tw="lg:ml-12!" />

      {/* {isLoggedIn && <PrimaryLink to="/signup">Sign Up</PrimaryLink>} */}

      <NavLink
        style={{
          position: "relative",
        }}
        to="/cart"
      >
        <CartIcon
          style={{
            display: "inline-flex",
            height: "32px",
            width: "32px",
          }}
        />
        <CartCount />
      </NavLink>
    </NavLinks>,
  ]

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass]

  const defaultLogoLink = (
    <LogoLink to="/">
      {/* <img src={logo} alt="logo" /> */}
      {/* <Img fixed={logoImage.fixed} /> */}
    </LogoLink>
  )

  logoLink = logoLink || defaultLogoLink
  links = links || defaultLinks

  return (
    <StaticQuery
      query={graphql`
        query {
          logoSmall: file(relativePath: { eq: "logoSmall.png" }) {
            childImageSharp {
              fixed(
                width: 105
                height: 65
                cropFocus: CENTER
                fit: COVER
                quality: 100
              ) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Header className={className || "header-light"}>
          <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
            <LogoLink to="/">
              <Img
                fixed={data.logoSmall.childImageSharp.fixed}
                imgStyle={{ objectFit: "contain" }}
              />
            </LogoLink>
            {links}
          </DesktopNavLinks>

          <MobileNavLinksContainer
            css={collapseBreakpointCss.mobileNavLinksContainer}
          >
            <LogoLink to="/">
              <Img
                fixed={data.logoSmall.childImageSharp.fixed}
                imgStyle={{ objectFit: "contain" }}
              />
            </LogoLink>
            <MobileNavLinks
              initial={{ x: "150%", display: "none" }}
              animate={animation}
              css={collapseBreakpointCss.mobileNavLinks}
            >
              {links}
            </MobileNavLinks>
            <NavToggle
              onClick={toggleNavbar}
              className={showNavLinks ? "open" : "closed"}
            >
              {showNavLinks ? (
                <CloseIcon tw="w-6 h-6" />
              ) : (
                <MenuIcon tw="w-6 h-6" />
              )}
            </NavToggle>
          </MobileNavLinksContainer>
        </Header>
      )}
    />
  )
}

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
}
export default HeadComponent
