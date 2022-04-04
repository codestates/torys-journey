import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import BookMarkCheck from "./BookMarkCheck";
import { DetailInfoDiv } from "../style/RestaurantInfo";

const DetailInfo = () => {
  const params = useParams<any>();
  // console.log(params);

  const [information, setInformation] = useState<any>({});

  const restaurantInformation = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/${params.id}`, {
        withCredentials: true,
      })
      .then((res) => setInformation(res.data))
      .catch((ewr) => console.log("ewr"));
  };

  useEffect(() => {
    restaurantInformation();
  });

  return (
    <>
      <BookMarkCheck />
      <DetailInfoDiv>
        <h5>여기는 식당 정보</h5>
        업종: {information.name} <br />
        주소: {information.address} <br />
        전화번호: {information.number}
        <br />
        영업시간: {information.officeHours}
      </DetailInfoDiv>
    </>
  );
};

export default DetailInfo;
