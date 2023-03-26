import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({
  pageDesc = "Simmons Gun Repair & Sales has been repairing firearms & putting our Simmons Floating Vent Ribs on shotguns since 1945. Call or visit today!",
  pageTitle = "Simmons Gun Repair- Olathe Gun Shop & Firearm Repair | Kansas City",
}) {
  return (
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());


  gtag('config', 'G-117Y5JVCQS');
          `,
        },
        {
          type: "application/ld+json",
          innerHTML: `
  {

  "@context": "http://www.schema.org",

  "@type": "SportingGoodsStore",

  "name": "Simmons Gun Repair & Sales",

  "url": "https://simmonsguns.com/",

   "sameAs": [
    "https://www.yelp.com/biz/simmons-gun-repair-and-sales-olathe",
    "https://dzone.com/users/4871272/simmonsguns.html",
    "https://www.creativelive.com/student/simmons-guns",
    "https://ccm.net/profile/user/SimmonsGunRepair",
    "https://linktr.ee/simmonsgunrepair",
    "https://peatix.com/user/13706447/view",
    "https://www.artstation.com/user-4666888",
    "https://www.deviantart.com/simmonsguns",
    "https://soundcloud.com/simmons-gun-repair",
    "https://pasteapp.com/p/qFfxXpKFc9O/s/jjUGg5q8zEz?view=0Qk6KabHbS3",
    "https://500px.com/p/simmonsgunrepairkc?view=photos",
    "https://app.screencast.com/NVA2sFDJCJEXs",
    "https://www.awwwards.com/simmons-guns/",
    "https://www.fimfiction.net/user/576323/SimmonsGuns",
    "https://www.jigsawplanet.com/SimmonsGuns",
    "https://writeupcafe.com/profile/simmonsguns/"
  ],

  "logo": "https://simmonsguns.com/static/848764d3f396299259623f7ffa371448/9a126/logoSmall.png",

  "image": "https://simmonsguns.com/static/476ee0e8c18caf0cd74f912179d27d5a/ea171/smithing.webp",

  "description": "Simmons Gun Repair & Sales has been repairing firearms and putting our Simmons Floating Vent Ribs on shotguns since 1945. Simmons and re-blue your firearm or Simguard it, which is a patented process that is sprayed on and then baked. We also sell new and used firearms in our local Olathe gun shop, and are proud to be a go-to name for those needing gun repair, gun bluing, gunsmithing, or a gun store in Kansas City, Overland Park, Lenexa, Olathe, Shawnee, KS, and the KC metro area. We also have an AR-15 building Class once per month. Call us for details on AR building classes or gunsmithing services in Kansas City today! We have been offering professional gunsmithing and firearm repair for 75+ years.",

  "address": {

    "@type": "PostalAddress",

    "streetAddress": " 700 S Rogers Rd # A",

    "addressLocality": "Olathe",

    "addressRegion": "Kansas",

    "postalCode": "66062",

    "addressCountry": "United States"

  },

  "paymentAccepted": "Cash,Credit Card,Invoice,PayPal",

  "openingHoursSpecification": [

    [

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Monday"

        ],

        "opens": "09:00",

        "closes": "17:00"

      },

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Tuesday"

        ],

        "opens": "09:00",

        "closes": "17:00"

      },

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Wednesday"

        ],

        "opens": "09:00",

        "closes": "17:00"

      },

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Thursday"

        ],

        "opens": "09:00",

        "closes": "17:00"

      },

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Friday"

        ],

        "opens": "09:00",

        "closes": "17:00"

      },

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Saturday"

        ],

        "opens": "09:00",

        "closes": "13:00"

      }

    ]

  ],

  "contactPoint": {

    "@type": "ContactPoint",

    "telephone": "+1(913) 782-3131"

  },

  "priceRange": "$$"

}
  
  `,
        },
      ]}
    >
      <meta charSet="utf-8" />
      <meta name="description" content={pageDesc}></meta>
      <title>{pageTitle}</title>
    </Helmet>
  )
}
