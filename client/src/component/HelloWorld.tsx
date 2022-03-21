import React from "react";
import axios from "axios";
import { useState } from "react";

const HelloWorld = () => {
  const [a, setA] = useState("")
  axios
    .get("http://ec2-13-125-241-113.ap-northeast-2.compute.amazonaws.com", {
      headers: { "Content-Type": "application/json" } ,withCredentials:true
    })
    .then((res) => setA(res.data) 
    )


  return <div>{a}</div>;
};

export default HelloWorld;
