import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import BookMarkCheck from "./BookMarkCheck";
import { DetailInfoDiv, InformationDiv } from "../style/RestaurantInfo";

const DetailInfo = () => {
  const params = useParams<any>();
  // console.log(params);

  const [information, setInformation] = useState<any>({});

  const restaurantInformation = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/${params.id}`, {})
      .then((res) => setInformation(res.data.data))
      .catch((ewr) => console.log("ewr"));
  };

  useEffect(() => {
    restaurantInformation();
  }, []);

  return (
    <>
      {/* <BookMarkCheck /> */}
      <DetailInfoDiv>
        <InformationDiv>상호명 : {information.name}</InformationDiv>
        <InformationDiv>평점 : {information.rating} </InformationDiv>
        <InformationDiv>주소 : {information.address}</InformationDiv>
        <InformationDiv>전화번호 : {information.number}</InformationDiv>
        <InformationDiv>상세정보 : {information.detailInfo}</InformationDiv>
        <InformationDiv>영업시간 : {information.officeHours}</InformationDiv>
      </DetailInfoDiv>
    </>
  );
};

export default DetailInfo;
