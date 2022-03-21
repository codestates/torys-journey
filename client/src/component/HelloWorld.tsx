import React from "react";
import axios from "axios";

const HelloWorld = () => {
  axios.get(
    "http://ec2-13-125-241-113.ap-northeast-2.compute.amazonaws.com"
  )
  .then((res)=>console.log(res))

  return <div>Hello World!</div>;
};

export default HelloWorld;
