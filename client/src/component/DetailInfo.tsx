import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import {
  DetailInfoDiv,
  InformationDiv,
  NameDiv,
} from "../style/RestaurantInfo";

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
        <InformationDiv>
          <NameDiv>상호명 : </NameDiv>
          {information.name}
        </InformationDiv>
        <InformationDiv>
          <NameDiv>평점 : </NameDiv> {information.rating}{" "}
        </InformationDiv>
        <InformationDiv>
          <NameDiv>주소 : </NameDiv> {information.address}
        </InformationDiv>
        <InformationDiv>
          <NameDiv>전화번호 : </NameDiv> {information.number}
        </InformationDiv>
        <InformationDiv>
          <NameDiv>상세정보 : </NameDiv> {information.detailInfo}
        </InformationDiv>
        <InformationDiv>
          <NameDiv>영업시간 : </NameDiv> {information.officeHours}
        </InformationDiv>
      </DetailInfoDiv>
    </>
  );
};

export default DetailInfo;
