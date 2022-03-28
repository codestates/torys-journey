import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/restaurant">Restaurant</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/hotel">Hotel</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/park">Park</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/hospital">Hospital</Link>&nbsp;&nbsp;&nbsp;&nbsp; 이건 navbar야
    </>
  );
};

export default Navbar;
