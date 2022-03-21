import React from "react";
import axios from "axios";
import { useState } from "react";

const HelloWorld = () => {
  const [a, setA] = useState("")
  axios
    .get("http://localhost:4000", {
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => setA(res.data) 
    )


  return <div>{a}</div>;
};

export default HelloWorld;
