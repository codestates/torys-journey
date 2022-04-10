import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import BookMarkCheck from "./BookMarkCheck";
import { DetailInfoDiv, InformationDiv , Div, InfoContainer} from "../style/RestaurantInfo";

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
      <InfoContainer><Div>상호명 :</Div> <InformationDiv>{information.name}</InformationDiv></InfoContainer>
      <InfoContainer><Div>평점 : </Div><InformationDiv>{information.rating} </InformationDiv></InfoContainer>
      <InfoContainer><Div>주소 :</Div> <InformationDiv>{information.address}</InformationDiv></InfoContainer>
      <InfoContainer><Div>전화번호 :</Div> <InformationDiv>{information.number}</InformationDiv></InfoContainer>
      <InfoContainer><Div>상세정보 : </Div> <InformationDiv>{information.detailInfo}</InformationDiv></InfoContainer>
      <InfoContainer><Div>영업시간 : </Div> <InformationDiv>{information.officeHours}</InformationDiv></InfoContainer>
      </DetailInfoDiv>
    </>
  );
};

export default DetailInfo;
