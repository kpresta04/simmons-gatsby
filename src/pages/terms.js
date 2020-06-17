import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import Header from "../components/headers/light.js"
import Footer from "../components/footers/FiveColumnDark.js"
import { SectionHeading } from "../components/misc/Headings"

const HeadingRow = tw.div`flex`
const Heading = tw(SectionHeading)`text-gray-900 mb-10`
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`
export default ({ headingText = "Terms & Conditions" }) => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <div className="entry-content">
              <h3>
                <strong>Acceptance of Terms</strong>
              </h3>
              <p>
                Welcome to simmonsguns.com (referred to as the “Site”). This
                Site is owned and operated by Dos Hannahs, LLC, a Kansas limited
                liability company (referred to as “Company,” “us” or “we”). The
                following Terms and Conditions of Use (“Terms”) set out the
                terms on which we offer you access to and use of our Site,
                services, applications, forums, and tools. All Site rules and
                policies are incorporated by reference into these Terms. We may
                also offer other services that are governed by additional terms
                of service.
              </p>
              <p>
                We reserve the right to change these Terms from time to time
                with or without notice to you. You acknowledge and agree that it
                is your responsibility to periodically review this Site and
                these Terms. Your continued use of this Site and Services after
                such modifications will constitute acknowledgement and
                acceptance of the modified Terms.
              </p>
              <p>
                As used in these Terms, references to our “Affiliates” include
                our owners, licensees, assigns, subsidiaries, affiliated
                companies, officers, directors, suppliers, partners, sponsors,
                advertisers, and includes (without limitation) all parties
                involved in creating, producing, and/or delivering this Site
                and/or contents and services available on this Site.
              </p>
              <p>
                As used in these Terms, references to “you” or “user” means the
                person now registering as a user of the Site or the existing
                user of the Site now agreeing to these Terms and, if applicable,
                the business entity specified by you upon registration.&nbsp;
                You and your business entity, if any, are jointly and severally
                liable for your obligations under these Terms.
              </p>
              <p>
                BY USING THIS SITE AND SERVICES ON THIS SITE, YOU AGREE TO BE
                BOUND BY THESE TERMS. IF YOU DO NOT WISH TO BE BOUND BY THE
                THESE TERMS, PLEASE EXIT THE SITE. YOUR SOLE REMEDY FOR
                DISSATISFACTION WITH THIS SITE, SERVICES AVAILABLE ON THIS SITE,
                OR THESE TERMS IS TO CEASE USING THE SITE.
              </p>
              <p>
                YOU AGREE THAT BY USING THE SITE AND THE SERVICES YOU ARE AT
                LEAST EIGHTEEN (18) YEARS OF AGE, YOU ARE LEGALLY ABLE TO ENTER
                INTO A CONTRACT AND AGREE TO COMPLY WITH ALL APPLICABLE LAWS AND
                REGULATIONS.
              </p>
              <p>
                <strong>
                  Please be advised that these Terms and the Site Rules set
                  forth how claims between us are resolved.&nbsp; Under these
                  Terms, a user will not be able to proceed against us through a
                  class or representative action, but will only be able to
                  pursue claims or seek relief against us on an individual
                  basis.
                </strong>
              </p>
              <ol>
                <li>
                  <h2> Services</h2>
                </li>
                <li>
                  We provide a number of Services for users on our Site,
                  including various communication tools, message boards,
                  shopping services, and search services (the “Services”). You
                  are solely responsible for providing, at your own expense, all
                  equipment necessary to use the Services and your own Internet
                  access (including payment of telephone service fees associated
                  with such access).
                </li>
                <li>
                  Eligibility. To use or access our Services you must be able to
                  form legally binding contracts. By registering for an account
                  or using the Site, you warrant and represent that you are at
                  least eighteen (18) years of age and are of the age of legal
                  majority in your state or country of residence, if older than
                  eighteen (18) years of age. You agree not to use the Site if
                  you are temporarily or indefinitely suspended from using the
                  Site or Services. Further, your account is personal to you and
                  shall not be used by any other person or entity.
                </li>
                <li>
                  Mobile Devices. We currently provide our mobile services for
                  free. However, please be advised that your carrier’s normal
                  rates and fees will still apply. Dos Hannah’s , LLC and its
                  Affiliates may collect additional information when you utilize
                  any of our mobile applications, including the type of mobile
                  device you use, the temporary or persistent unique device
                  identifiers, the IP address of your mobile device, your mobile
                  operating system, the type of mobile Internet browsers you
                  use, and information about the way you use our mobile
                  applications.
                </li>
                <li>
                  No Guarantee. Although we work hard to provide quality
                  Services, you understand and acknowledge that we cannot
                  promise or guarantee specific results from using the Site or
                  Services available on this Site.
                </li>
                <li>
                  Temporary Interruptions. You understand and agree that
                  temporary interruptions of the Site may occur as normal events
                  that are out of our control. You also understand and agree
                  that we have no control over the third-party networks or
                  service(s) that we may use to provide you with Services. You
                  agree that the Services available on this Site are provided
                  “AS IS” and that we assume no responsibility for the
                  timeliness, deletion, mis-delivery or failure to store any
                  user communications or personalization settings.
                </li>
              </ol>

              <h2> Transactions on the Site</h2>

              <ol>
                <li>Fees. We do not charge any fees to use our Site.</li>
                <li>Credit Cards. This Site does process credit cards.</li>
                <li>
                  The persons using the Site are of legal age and capacity to
                  enter into contracts.
                </li>
                <li>
                  The persons using the Site are not misrepresenting their
                  identity, location, or authority to enter contracts.
                </li>
              </ol>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Buyer’s Responsibilities.
              </p>
              <p>.</p>
              <ol start="3">
                <li>
                  Legality of Purchase and Shipment.&nbsp; If you purchase
                  firearms on the Site, you agree to comply with all applicable
                  Legal Requirements governing the specific requirements for
                  transfer and shipping of firearms, including without
                  limitation those found in the Site Rules You covenant and
                  agree that:
                </li>
                <li>
                  a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  you will comply with all applicable Legal Requirements (as
                  defined above) in purchasing, transferring and shipping Items;
                </li>
                <li>
                  b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  you shall be solely responsible for compliance with all
                  applicable export or import controls with respect to these
                  transactions with respect to Items purchased by you;
                </li>
                <li>
                  c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  you shall comply with all Legal Requirements regarding the
                  reporting, collection, withholding and payment of all taxes
                  and duties applicable to the sale, export and transport of
                  each Item;
                </li>
                <li>
                  d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  you shall comply with the following required terms of sale on
                  the Site:
                </li>
              </ol>
              <p>
                (1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Firearms must be shipped only to a Federal Firearms License
                (FFL) holder. “Firearms” and “Ammunition” shall have the
                meanings given in the Gun Control Act of 1968, 18 U.S.C. 44 §
                921.
              </p>
              <p>
                (2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Buyer must transmit a copy of his/her (or his/her transfer
                dealer’s) license to the seller before the Item can be shipped.
              </p>
              <p>
                (3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Buyer must make arrangements with a FFL holder after buying a
                firearm on the site.
              </p>
              <p>
                (4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Items may not be sold or shipped contrary to state and local
                Legal Requirements. State and local requirements may vary
                considerably. It is your responsibility to be knowledgeable and
                comply with all Legal Requirements.
              </p>
              <ol start="4">
                <li>
                  United States Requirement: For any items that you are buying ,
                  you further warrant that you are familiar with the United
                  States laws and regulations governing export controls,
                  sanctions and embargoes. You additionally agree that: (i) you
                  are not a national of or located in any country embargoed by
                  the United States, and (ii) you are not on the Excluded
                  Parties List System, the Specially Designated Nationals List,
                  or the Denied Persons List, and you are not listed on any
                  other lists maintained by the United States federal government
                  which prohibits or restricts participating in commercial or
                  other transactions, and you are not using or accessing the
                  Site on behalf of a party who is on any such lists.
                </li>
                <li>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;Taxation. You agree that Dos Hannahs , LLC is not
                  responsibility for the reporting, payment, collection and
                  remittance of any sales/use tax, VAT tax, transaction tax,
                  transfer tax or any other fee or tax that may be assessed on
                  any sale or transaction conducted through the Site by any
                  jurisdiction having taxing authority over the sale or
                  transaction. You agree that you are responsible for, and will
                  indemnify us against, any liability for any sales/use, VAT or
                  similar transaction tax that is or may be assessed by any
                  jurisdiction with respect to the fees charged to sellers by
                  us. You agree to defend, indemnify and hold us harmless from
                  and against any and all liabilities, damages and costs that
                  may result from inadequate reporting, payment, collection or
                  remittance by you of any taxes relating to transactions
                  conducted on the Site, except taxes imposed on or measured by
                  our income or net worth.
                </li>
                <li>
                  Release.. If you are a California resident, you waive
                  California Civil Code §1542, which says: “A general release
                  does not extend to claims which the creditor does not know or
                  suspect to exist in his favor at the time of executing the
                  release, which if known by him must have materially affected
                  his settlement with the debtor.”
                </li>
                <li>
                  Transfer of Title From Seller to Buyer.. Nothing in these
                  Terms shall modify the governing provisions of Florida’s
                  Uniform Commercial Code, under which legal ownership of an
                  Item is transferred upon physical delivery of the Item to the
                  buyer by the seller. Unless the buyer and the seller agree
                  otherwise, the buyer will become the Item’s lawful owner upon
                  physical receipt of the Item from the seller, in accordance
                  with governing law cited above.
                </li>
                <li>
                  <h2>
                    {" "}
                    Site Conduct, Posting Policies &amp; Third Party Websites
                  </h2>
                </li>
                <li>
                  User-Created Content Guidelines: Your use of the Site, and our
                  Services, are subject to all applicable laws and regulations,
                  and you are solely responsible for any comments or posts you
                  leave on the Site. By posting information on the Site, or by
                  otherwise using any communications service, message board,
                  newsgroup, or other interactive service available on the Site,
                  you agree that you will not post comments, messages, links,
                  code or other information that:
                </li>
                <li>
                  is unlawful, threatening, abusive, harassing, defamatory,
                  deceptive, fraudulent, tortious, invasive of another’s
                  privacy, or includes graphic descriptions of sexual or violent
                  content;
                </li>
                <li>
                  victimizes, harasses, degrades, or intimidates an individual
                  or group of individuals on the basis of religion, gender,
                  sexual orientation, race, ethnicity, age, or disability;
                </li>
                <li>
                  infringes on any patent, trademark, trade secret, copyright,
                  right of publicity, or other proprietary right of any party;
                </li>
                <li>
                  consists of unsolicited advertising, junk or bulk email (also
                  known as “spam”), chain letters, any other form of
                  unauthorized solicitation, or any form of lottery or gambling;
                </li>
                <li>
                  contains any form of malicious code, files, or programs that
                  are designed or intended to disrupt, damage, or limit the
                  functionality of any software, hardware, or telecommunications
                  equipment or otherwise causes damage, or allows you to obtain
                  unauthorized access to any data or other information of any
                  third party;
                </li>
                <li>
                  breaches the security of, compromises or otherwise allows
                  access to secured, protected or inaccessible areas of this
                  Site, or attempts to gain access to other network or server
                  via your account on this Site; or
                </li>
                <li>
                  impersonates any person or entity, including any of our
                  employees or representatives.
                </li>
                <li>
                  No Endorsement. Company neither endorses nor assumes any
                  liability for any material uploaded or submitted by users on
                  any part of the Site. Although we do not pre-screen, police or
                  monitor comments posted on the Site, we and our agents reserve
                  the right to remove any and all postings that we believe do
                  not comply with these Terms and any other rules of user
                  conduct for our Site, or are otherwise harmful, objectionable,
                  or inaccurate. We are not responsible for any failure or delay
                  in removing such postings.
                </li>
                <li>
                  Third-Party Sites and Information. This Site may redirect or
                  link to other websites on the Internet, or may otherwise
                  include references to information, products or services made
                  available by unaffiliated third parties. While we make every
                  effort to work with trusted, reputable providers, from time to
                  time such sites may contain information, material or policies
                  that some may find inappropriate or personally objectionable.
                  You understand that we are not responsible for the accuracy,
                  completeness, decency or legality of content hosted by third
                  party websites, nor are we responsible for errors or omissions
                  in any references made on those websites. The inclusion of
                  such a link or reference is provided merely as a convenience
                  and does not imply endorsement of, or association with the
                  Site or party by us, or any warranty of any kind, either
                  express or implied.
                </li>
                <li>
                  Promotions. From time to time, this Site may include
                  advertisements offered by third parties. You may enter into
                  correspondence with or participate in promotions of the
                  advertisers showing their products on this site. Any such
                  correspondence or promotions, including the delivery of and
                  the payment for goods and services by those third parties, and
                  any other terms, conditions, warranties or representations
                  associated therewith, are solely between you and the
                  advertiser. We assume no liability, obligation or
                  responsibility for any part of any such correspondence or
                  promotion.
                </li>
                <li>
                  Site Rules. Your use of the Site is conditioned upon your
                  consent and compliance with the{" "}
                  <a href="http://support.auctionarmory.com/knowledgebase/site-rules/">
                    Site Rules
                  </a>
                  , which are incorporated by reference into these Terms.
                </li>
                <li>
                  <h2> Company Intellectual Property</h2>
                </li>
                <li>
                  Content. For purposes of these Terms, “content” is defined as
                  any information, communications, software, published works,
                  photos, video, graphics, music, sounds, or other material that
                  can be viewed by users on our Site and is owned by Company or
                  its Affiliates.
                </li>
                <li>
                  Ownership of Content. By accepting these Terms, you agree that
                  all content presented to you on this Site is protected by any
                  and all intellectual property and/or other proprietary rights
                  available within the United States, and is the sole property
                  of Company or its Affiliates.
                </li>
                <li>
                  Company Intellectual Property. The following are registered
                  trademarks, trademarks or service marks of Dos Hannahs, LLC or
                  its Affiliates: “.Simmonsgunrepair.com”, the Simmonsguns.com
                  logo and other Simmons Gun Repair &amp; Sales names and logos
                  and all related product or service names, design marks and
                  slogans used on the Site. All custom graphics, icons, logos
                  and service names are registered trademarks, trademarks or
                  service marks of Dos Hannahs , LLC or its Affiliates. All
                  other trademarks or service marks are property of their
                  respective owners. Nothing in these Terms grants you any right
                  to use any trademark, service mark, logo, and/or the name of
                  Dos Hannahs, LLC or its Affiliates.
                </li>
                <li>
                  Limitations on Use of Content. Except for a single copy made
                  for personal use, you may not copy, reproduce, modify,
                  republish, upload, post, transmit, or distribute any content
                  from this Site in any form or by any means whatsoever without
                  prior written permission from us. Any unauthorized use of Site
                  content violates our intellectual property interests and could
                  result in criminal or civil penalties.
                </li>
                <li>
                  No warranty for Third-Party Infringement. Neither we or our
                  Affiliates warrant or represent that your use of materials
                  displayed on, or obtained through, this Site will not infringe
                  the rights of third parties.
                </li>
                <li>
                  <h2> Content You Create</h2>
                </li>
                <li>
                  Your Intellectual Property Rights. Subject to our{" "}
                  <a href="http://support.auctionarmory.com/knowledgebase/privacy-policy/">
                    Privacy Policy
                  </a>{" "}
                  , any communication or material that you transmit to this Site
                  or to us, whether by email or other means, for any reason,
                  will be treated as non-confidential and non-proprietary user
                  content (“User Content”). While you retain all rights to the
                  User Content, you grant us (including our employees and
                  Affiliates), a non-exclusive, paid-up, perpetual, and
                  worldwide right to copy, distribute, display, publish,
                  translate, adapt, modify, and otherwise use the User Content
                  for any purpose whatsoever, regardless of the form or medium
                  in which it is used.
                </li>
              </ol>
              <p>
                We respect the intellectual property rights of others, and we
                ask you to do the same. In instances where we are notified of
                alleged infringing Company or User Content through our
                Designated Agent, a decision may be made to remove access or
                disable access to such materials, in compliance with the safe
                harbor provisions of the Digital Millennium Copyright Act
                (“DMCA”), 17 U.S.C. §&thinsp;512(c). We may also make a good
                faith attempt to contact the person who submitted the affected
                material so that they may make a counter-notification.
              </p>
              <p>
                If you believe that you or someone else’s copyright has been
                infringed by Company or User Content provided on this Site, you
                (or the owner or rights holder, collectively, “Rights Holder”)
                should send notification to our Designated Agent immediately.
                Prior to sending us notice, the Rights Holder may wish to
                consult a lawyer to determine their rights and legal obligations
                under the DMCA and any other applicable laws. Nothing here or
                anywhere on this Site is intended as a substitute for qualified
                legal advice. To file a Notice of Infringing Material, we ask
                that the Rights Holder provide the following information:
              </p>
              <ol>
                <li>
                  Reasonably sufficient details about the nature of the
                  copyrighted work in question, or, in the case of multiple
                  alleged infringements, a representative list of such works.
                  This should include, title(s), author(s), any U.S. Copyright
                  Registration number(s), URL(s) etc.;
                </li>
                <li>
                  Reasonably sufficient details to enable us to identify and
                  locate the material that is allegedly infringing the Rights
                  Holders’ work(s) (for example, file name or URL of the page(s)
                  that contain(s) the material);
                </li>
                <li>
                  The Rights Holder’s contact information so that we can contact
                  them (including for example, the Rights Holder’s address,
                  telephone number, and email address);
                </li>
                <li>
                  A statement that the Rights Holder has a good faith belief
                  that the use of the material identified above in 2 is not
                  authorized by the copyright owner, its agent, or the law;
                </li>
                <li>
                  A statement, under penalty of perjury, that the information in
                  the notification is accurate and that the Rights Holder is
                  authorized to act on behalf of the copyright owner; and
                </li>
                <li>The Rights Holder’s electronic signature.</li>
              </ol>
              <p>
                <strong>Notice may be sent to:</strong>
              </p>
              <p>By Mail:</p>
              <p>Dos Hannahs, LLC</p>
              <p>14008 Reeder St</p>
              <p>Overland Park, KS 66221</p>
              <p>By e-mail: tpresta@simmonsguns.com</p>
              <p>
                You also acknowledge and agree that upon receipt of a notice of
                a claim of copyright infringement, we may temporarily or
                permanently remove the identified materials from our Site
                without liability to you or any other party.
              </p>
              <ol>
                <li>
                  Confidential Information. As stated above, all communications
                  sent by you to us will be treated as non-confidential and
                  non-proprietary (subject to our Privacy Policy). Please do not
                  submit confidential or proprietary information to us
                  (including patentable ideas, new content suggestions or
                  business proposals) unless we have mutually agreed in writing
                  otherwise. Ideas that we receive unsolicited will be treated
                  as property owned by the Company and will not be returned to
                  you.
                </li>
              </ol>

              <h2>Email Services &amp; Data Stored on Our Servers</h2>

              <ol>
                <li>
                  Email Service. We may make email services available to users
                  of our Site, either directly or through a third-party
                  provider. We will not inspect or disclose the contents of
                  private email messages except with the consent of the sender
                  or the recipient, or in the narrowly-defined situations
                  provided under the Electronic Communications Privacy Act, 18
                  U.S.C. §&thinsp;2510, et. seq. or as other required by law or
                  by court or governmental order. Further information is
                  available in our Privacy Policy.
                </li>
                <li>
                  Spam Prevention. We use automated tools or techniques to
                  protect our users from mass unsolicited mailings (also known
                  as “spam”) and/or other types of malicious or harmful content.
                  However, such tools or techniques are not perfect, and we
                  therefore are not responsible in cases where legitimate
                  communications are accidentally blocked, or unsolicited
                  communications get through to your Company supplied email
                  account.
                </li>
                <li>
                  Storage Provided by Us. If you opt to store personal data of
                  any kind on our servers, you understand and agree to abide by
                  our general practices and limits concerning use of the
                  Services available on our Site, including without limitation
                  the maximum number of days that uploaded content will be
                  retained, the maximum disk space that will be allotted, and
                  the maximum number of times you may access the services in a
                  given period of time. You agree that we have no responsibility
                  or liability for the deletion or failure to store any content
                  maintained or transmitted on or through this Site. You
                  acknowledge that we reserve the right to remove or terminate
                  accounts that remain inactive for one (1) year, or in cases
                  where you have violated one or more of these Terms.
                </li>
              </ol>

              <h2> Privacy &amp; Security</h2>

              <ol>
                <li>
                  Login Required. In order to access some of the Services on
                  this Site, or to post User Content, you may be asked to set up
                  an account and password. Our account registration page
                  requests certain personal information from you (“Registration
                  Info”). You will have the ability to maintain and periodically
                  update your Registration Info as you see fit. By registering,
                  you agree that all information provided by you as Registration
                  Info is true and accurate and that you will maintain and
                  update this information as required in order to keep it
                  current, complete and accurate.
                </li>
                <li>
                  Passwords &amp; Security. If you register for an account on
                  the Site, you agree that you are responsible for maintaining
                  the security and confidentiality of your password, and that
                  you are fully responsible for all activities occurring under
                  your account. Therefore, you must take reasonable steps to
                  ensure that others do not gain access to your password and
                  account. Your right to use the Site is personal to you. You
                  may not sub-license, transfer, sell or assign your right to
                  access or use the Site to any third party without prior our
                  written approval. Any attempt to do so will be null and void
                  and shall be considered a material breach of these Terms.
                </li>
                <li>
                  Disclosure to Third Party Affiliates. You hereby grant us the
                  right to disclose to third parties certain Registration Info
                  about you. The information we obtain through your use of this
                  Site, including your Registration Info, is subject to our
                  Privacy Policy, which is specifically incorporated by
                  reference into these Terms.
                </li>
                <li>
                  <h2> Disclaimer</h2>
                </li>
              </ol>
              <p>
                ALL CONTENT AND SERVICES ON THIS SITE ARE PROVIDED ON AN “AS IS”
                AND “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND, EITHER
                EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
                PURPOSE, OR THE WARRANTY OF NON-INFRINGEMENT. WITHOUT LIMITING
                THE FOREGOING, WE MAKE NO WARRANTY THAT (A) THE CONTENT OR
                SERVICES WILL MEET YOUR REQUIREMENTS, (B) THE CONTENT, SERVICES
                OR SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
                (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE CONTENT
                OR SERVICES OFFERED WILL BE EFFECTIVE, ACCURATE OR RELIABLE, OR
                (D) THE QUALITY OF ANY CONTENT OR SERVICES OR OBTAINED BY YOU
                FROM THE SITE FROM US OR OUR AFFILIATES WILL MEET YOUR
                EXPECTATIONS OR BE FREE FROM MISTAKES, ERRORS OR DEFECTS.
              </p>
              <p>
                THIS SITE COULD INCLUDE TECHNICAL OR OTHER MISTAKES,
                INACCURACIES OR TYPOGRAPHICAL ERRORS. WE MAY MAKE CHANGES TO THE
                CONTENT AND SERVICES AT THIS SITE AT ANY TIME WITHOUT NOTICE.
                THE CONTENT AVAILABLE AT THIS SITE MAY BE OUT OF DATE, AND WE
                MAKE NO COMMITMENT TO UPDATE SUCH CONTENT.
              </p>
              <p>
                THE USE OF THE SERVICES OR OTHER ACQUISITION OF ANY PRODUCTS OR
                CONTENT THROUGH THIS SITE IS DONE AT YOUR OWN DISCRETION AND
                RISK AND WITH YOUR AGREEMENT THAT YOU WILL BE SOLELY RESPONSIBLE
                FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT
                RESULTS FROM SUCH ACTIVITIES.
              </p>
              <p>
                Through your use of the Site, you may have the opportunities to
                engage in commercial transactions with other users. You
                acknowledge that all transactions relating to any Items provided
                by any third party, including, but not limited to the purchase
                terms, payment terms, warranties, guarantees relating to such
                transactions, are agreed to solely between the seller of such
                Item and you.
              </p>
              <p>
                WE MAKE NO WARRANTY REGARDING ANY TRANSACTIONS EXECUTED THROUGH
                A THIRD PARTY, OR IN CONNECTION WITH THIS SITE, AND YOU
                UNDERSTAND AND AGREE THAT SUCH TRANSACTIONS ARE CONDUCTED
                ENTIRELY AT YOUR OWN RISK. ANY WARRANTY THAT IS PROVIDED IN
                CONNECTION WITH ANY SERVICES OR CONTENT AVAILABLE ON OR THROUGH
                THIS SITE FROM A THIRD PARTY IS PROVIDED SOLELY BY SUCH THIRD
                PARTY, AND NOT BY US OR ANY OTHER OF OUR AFFILIATES.
              </p>
              <p>
                WE RESERVE THE SOLE RIGHT TO EITHER MODIFY OR DISCONTINUE THE
                SITE, INCLUDING ANY SERVICES OR FEATURES THEREIN, AT ANY TIME
                WITH OR WITHOUT NOTICE TO YOU. WE SHALL NOT BE LIABLE TO YOU OR
                ANY THIRD PARTY SHOULD WE EXERCISE SUCH RIGHT. MODIFICATIONS MAY
                INCLUDE, BUT ARE NOT LIMITED TO, THE ADDITION OF FREE OR
                FEE-BASED SERVICES OR CHANGES TO LIMITATIONS ON ALLOWABLE
                CONTENT, FILE SIZES OR FILE TYPES. ANY NEW FEATURES THAT AUGMENT
                OR ENHANCE THE THEN-CURRENT SERVICES ON THIS SITE SHALL ALSO BE
                SUBJECT TO THESE TERMS.
              </p>
              <p>
                SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
                CERTAIN WARRANTIES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT
                APPLY TO YOU. PLEASE CONSULT THE LAWS IN YOUR JURISDICTION.
              </p>
              <ol>
                <li>
                  <h2> Limitation of Liability &amp; Indemnification</h2>
                </li>
              </ol>
              <p>
                IN NO EVENT SHALL WE OR OUR AFFILIATES BE LIABLE TO YOU OR ANY
                THIRD PARTY FOR ANY SPECIAL, PUNITIVE, INCIDENTAL, INDIRECT OR
                CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER,
                INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOSS OF USE,
                DATA OR PROFIT LOSS, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES, AND ON ANY THEORY OF LIABILITY,
                ARISING OUT OF OR IN CONNECTION WITH THE USE OF THIS SITE OR OF
                ANY WEBSITE REFERENCED OR LINKED TO FROM THIS SITE.
              </p>
              <p>
                FURTHER, WE SHALL NOT BE LIABLE IN ANY WAY FOR THIRD PARTY
                PROMISES REGARDING OUR SERVICES OR CONTENT OR FOR ASSISTANCE IN
                CONDUCTING COMMERCIAL TRANSACTIONS WITH THE THIRD PARTY THROUGH
                THIS SITE.
              </p>
              <p>
                SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR LIMITATION OF
                LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE
                LIMITATIONS MAY NOT APPLY TO YOU. PLEASE CONSULT THE LAWS IN
                YOUR JURISDICTION.
              </p>
              <p>
                You agree to defend, indemnify, and hold us and our Affiliates
                harmless from all liabilities, claims, and expenses, including
                attorneys’ fees that may arise from your use or misuse of this
                Site. We reserve the right, at our own expense, to assume the
                exclusive defense and control of any matter otherwise subject to
                indemnification by you, in which event you will cooperate with
                us in asserting any available defenses.
              </p>
              <ol>
                <li>
                  <h2> Termination of Use</h2>
                </li>
                <li>
                  Grounds for Termination. You agree that we may, at our sole
                  discretion, terminate or suspend your access to all or part of
                  the Site with or without notice and for any reason, including,
                  without limitation, breach of these Terms or the Site Rules.
                  Any suspected fraudulent, abusive or illegal activity may be
                  grounds for barring your access to this Site, and reporting
                  you to the proper authorities, if necessary. In the event that
                  your account is closed and terminated, it will be marked
                  inactive in our system, but we cannot delete your user
                  information or transaction history.
                </li>
                <li>
                  No Right to Services Upon Termination. Upon termination and
                  regardless of the reason(s) motivating such termination, your
                  right to use the Services available on this Site will
                  immediately cease. We shall not be liable to you or any third
                  party for any claims for damages arising out of any
                  termination or suspension or any other actions taken by us in
                  connection therewith. Sections 1 and 3-11 of these Terms, as
                  well as your liability for any unpaid fees, shall survive any
                  termination.
                </li>
              </ol>

              <h2> Miscellaneous Provisions</h2>

              <ol>
                <li>
                  International Use. Although this Site may be accessible
                  worldwide, we make no representation that materials on this
                  Site are appropriate or available for use in locations outside
                  the United States. Those who choose to access this Site from
                  other locations do so on their own initiative and at their own
                  risk. If you choose to access this Site from outside the
                  United States, you are responsible for compliance with local
                  laws in your jurisdiction, including but not limited to, the
                  taxation of products purchased over the Internet. Any offer
                  for any product, Service, and/or information made in
                  connection with this Site is void where prohibited.
                </li>
                <li>
                  No Third-Party Beneficiaries. There are no third-party
                  beneficiaries to these Terms.
                </li>
                <li>
                  Governing Law. This Site (excluding any third-party websites)
                  is controlled by us from our offices in Orlando, and the
                  statutes and laws of the State of Florida shall be
                  controlling, without regard to the conflicts of laws
                  principles thereof. You agree and hereby submit to the
                  exclusive personal jurisdiction and venue of the Circuit Court
                  of the Ninth Judicial Circuit of Florida or the U.S. District
                  Court for the Middle District of Florida with respect to such
                  matters controlled by that court.
                </li>
                <li>
                  Exclusion of Class Actions. TO THE FULLEST EXTENT PERMITTED
                  UNDER APPLICABLE LAW,&nbsp; YOU AND DOS HANNAHS, LLC AGREE
                  THAT (A) EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON
                  AN INDIVIDUAL BASIS, (B) WE BOTH HEREBY WAIVE ANY RIGHT TO
                  BRING CLAIMS&nbsp; AS PART OF ANY CLASS OR REPRESENTATIVE
                  ACTION OR PROCEEDING, (C) UNLESS BOTH YOU AND AUCTION ARMORY,
                  LLC AGREE TO THE CONTRARY, MORE THAN ONE PARTY’S CLAIMS MAY
                  NOT BE CONSOLIDATED OR JOINED BY THE APPLICABLE COURT, AND
                  (D)&nbsp; ANY RELIEF AWARDED TO YOU CANNOT AFFECT OTHER USERS,
                  AND VICE VERSA.
                </li>
                <li>
                  Notices. All notices to a party shall be in writing and shall
                  be made via email. Notices to us must be sent to the attention
                  of Support at Support@AuctionArmory.com. You agree to allow us
                  to submit notices to you either through the email address
                  provided, or to the address we have on record. Any notices or
                  communication under these Terms will be deemed delivered to
                  the party receiving such communication (1) on the delivery
                  date if delivered personally to the party; (2) two business
                  days after deposit with a commercial overnight carrier, with
                  written verification of receipt; (3) five business days after
                  the mailing date, if sent by U.S. mail, return receipt
                  requested; (4) on the delivery date if transmitted by
                  confirmed facsimile; or (5) on the delivery date if
                  transmitted by confirmed email.
                </li>
                <li>
                  No Resale Right. You agree not to sell, resell, reproduce,
                  duplicate, distribute, copy or use for any commercial purposes
                  any portion of this Site, or use of or access to this Site or
                  Services provided through this Site, beyond the limited rights
                  granted to you under Section 5 of these Terms.
                </li>
                <li>
                  Force Majeure. In addition to any excuse provided by
                  applicable law, we shall be excused from liability for
                  non-delivery or delay in delivery of products and Services
                  available through our Site arising from any event beyond our
                  reasonable control, whether or not foreseeable by either
                  party, including but not limited to: labor disturbance, war,
                  fire, accident, adverse weather, inability to secure
                  transportation, governmental act or regulation, and other
                  causes or events beyond our reasonable control, whether or not
                  similar to those which are enumerated above.
                </li>
                <li>
                  Savings Clause. If any part of these Terms is held invalid or
                  unenforceable, that portion shall be construed in a manner
                  consistent with applicable law to reflect, as nearly as
                  possible, the original intentions of the parties, and the
                  remaining portions shall remain in full force and effect.
                </li>
                <li>
                  No Waiver. Any failure by us to enforce or exercise any
                  provision of these Terms or related rights shall not
                  constitute a waiver of that right or provision.
                </li>
                <li>
                  No Right of Survivorship and Non-Transferability. You agree
                  that your account is non-transferable and any rights to your
                  account or contents within your account terminate upon your
                  death. Upon receipt of a copy of a death certificate, your
                  account may be terminated and all contents therein permanently
                  deleted.
                </li>
                <li>
                  Statute of Limitations. You agree that regardless of any
                  statute or law to the contrary, any claim or cause of action
                  arising out of or related to use of the Service or these Terms
                  must be filed within one (1) year after such claim or cause of
                  action arose (or if multiple causes, from the date the first
                  such cause arose) or be forever barred. If you bring an action
                  in an improper forum or outside of the time limit in violation
                  of this Section, we shall be entitled to recover reasonable
                  attorney’s fees in responding to such action.
                </li>
                <li>
                  Headings. The section titles are for convenience only and have
                  no legal or contractual effect.
                </li>
                <li>
                  Entire Agreement. These terms and conditions constitute the
                  entire agreement and understanding between the parties
                  concerning the subject matter hereof and supersedes all prior
                  agreements and understandings of the parties with respect
                  thereto. These Terms may NOT be altered, supplemented, or
                  amended by the use of any other document(s). To the extent
                  that anything in or associated with this Site is in conflict
                  or inconsistent with these Terms, these Terms shall take
                  precedence.
                </li>
                <li>
                  Execution of Agreement. Your continued use of the Site
                  constitutes your acceptance of these Terms as a legal contract
                  and the equivalent of an electronic signature. Natural persons
                  executing this contract warrant and represent that they are at
                  least eighteen (18) years of age or the age of majority in
                  their jurisdiction. Users and the person executing this
                  agreement on behalf of any user that is a proprietorship,
                  corporation, partnership or other entity, represent that such
                  Person is duly authorized by pall necessary and appropriate
                  corporate or other action to execute this contract on behalf
                  of the user.
                </li>
              </ol>
              <p>
                <strong>
                  Please report any violations of these Terms to Customer
                  Support at 913-782-3131
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>&nbsp;</p>
            </div>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  )
}
