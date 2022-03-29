import React from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [a, setA] = useState("");
  axios
    .get(`${process.env.REACT_APP_API_URL}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => setA(res.data)); //헬로월드 배포 테스트

  return (
    <>
      <div>{a}</div>
    </>
  );
};

export default Home;
