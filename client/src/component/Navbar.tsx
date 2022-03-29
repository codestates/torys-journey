import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/restaurant">Restaurant</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/hotel">Hotel</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/park">Park</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/hospital">Hospital</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    </>
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
  );
};

export default Navbar;
