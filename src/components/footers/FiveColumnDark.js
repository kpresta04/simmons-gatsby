import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { Link } from "gatsby"

import InstagramIcon from "~/images/instagram.svg"

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`

const ColumnHeading = tw.h5`font-bold uppercase`

const LinkList = tw.ul`mt-4 text-sm font-medium`
const LinkListItem = tw.li`mt-3`
const Linkstyle = `border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`
// const LogoImg = tw.img`w-8`
const LogoText = tw.h5`text-xl font-black mr-4`

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoText>Simmons Gun Repair</LogoText>
            </LogoContainer>
            <CompanyAddress>700 S. Rogers Road, Olathe Kansas</CompanyAddress>
            <SocialLinksContainer>
              <SocialLink
                rel="noopener"
                target="_blank"
                href="https://www.instagram.com/simmonsgunrepair/"
              >
                <InstagramIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link className={Linkstyle} to="/login">
                  Log In
                </Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link className={Linkstyle} to="#">
                  Blog
                </Link>
              </LinkListItem> */}
              <LinkListItem>
                <Link className={Linkstyle} to="/faq">
                  FAQs
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/contact">
                  Support
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/about">
                  About Us
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          {/* <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
             
              <LinkListItem>
                <Link className={Linkstyle} to="#">
                  Personal
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="#">
                  Business
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="#">
                  Team
                </Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link className={Linkstyle} to="#">
                  GDPR
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/privacy">
                  Privacy Policy
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/terms">
                  Terms of Service
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="#">
                  Disclaimer
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>(913) (782)-3131</LinkListItem>
              <LinkListItem>
                <a
                  className={Linkstyle}
                  rel="noopener"
                  target="_blank"
                  href="mailto:tpresta@simmonsguns.com"
                >
                  tpresta@simmonsguns.com
                </a>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/contact">
                  Sales
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link className={Linkstyle} to="/vip">
                  VIP Club
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>
            &copy; Copyright 2020, Simmons Gun Repair
          </CopyrightNotice>
          {/* <CompanyInfo>An Internet Company.</CompanyInfo> */}
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  )
}
