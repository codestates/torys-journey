import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/restaurant">Restaurant</Link>
      <Link to="/hotel">Hotel</Link>
      <Link to="/park">Park</Link>
      <Link to="/hospital">Hospital</Link>
      <Link to="/info">Info</Link>
      이건 navbar야
    </>
  );
};

export default Navbar;
