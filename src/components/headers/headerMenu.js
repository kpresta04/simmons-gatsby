import React from "react"

import { Link } from "gatsby"
import { NavLink } from "./light"
import "./dropDown.css"

const ButtonMenu = () => (
  <div className="dropdown-content">
    <Link to="/shop" state={{ category: 0 }}>
      All products
    </Link>
    <Link to="/shop" state={{ category: 1 }}>
      Best selling
    </Link>
    <Link to="/shop" state={{ category: 2 }}>
      Hand guns
    </Link>
    <Link to="/shop" state={{ category: 3 }}>
      Rifles
    </Link>

    <Link to="/shop" state={{ category: 4 }}>
      Shot guns
    </Link>
    <Link to="/shop" state={{ category: 5 }}>
      Ammunition
    </Link>
    <Link to="/shop" state={{ category: 6 }}>
      Other
    </Link>
  </div>
)
export default function SimpleMenu() {
  return (
    <div className="dropdown">
      <NavLink aria-controls="simple-menu" aria-haspopup="true" to="/shop">
        Shop
      </NavLink>
      <ButtonMenu />
    </div>
  )
}
