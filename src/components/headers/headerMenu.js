import React from "react"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Link } from "gatsby"

export function SimpleMenu() {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem>
        <Link to="/shop">Profile</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/shop">My account</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/shop">Logout</Link>
      </MenuItem>
    </Menu>
  )
}
