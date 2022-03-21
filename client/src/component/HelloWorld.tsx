import React from "react";
import axios from "axios";

const HelloWorld = () => {
  axios
    .get("서버주소", { withCredentials: false })
    .then(() => console.log("Hello World!"));
  return <div>Hello World!</div>;
};

export default HelloWorld;
