import React from "react";
import { Menu, MenuItem, MenuLink } from "../style/Navbar";

const Navbar = () => {
  return (
    <Menu>
      <MenuItem>
        <MenuLink to="/">Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/restaurant">Restaurant</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/hotel">Hotel</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/park">Park</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/hospital">Hospital</MenuLink>
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
