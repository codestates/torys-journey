import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import axios from "axios";
import Pictures from "../component/Pictures";
import Info from "../component/Info";
import Map from "../component/Map";
import BookMarkCheck from "../component/BookMarkCheck";
import dummyData from "./TESTTESTTEST";
import { RestaurantDiv, RestaurantMainDiv } from "../style/RestaurantInfo";

const RestaurantInfo = () => {
  const params = useParams();

  // const [restaurantInfo, setRestaurantInfo] = useState({}); //! 서버 연결 시 해제

  // const getRestaurantInfo = () => {
  //   //! 서버 연결 시 해제
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/restaurant/${params.id}`, {})
  //     .then((res) => setRestaurantInfo(res))
  //     .catch(() => alert("불러오기를 실패하였습니다."));
  // };

  // useEffect(getRestaurantInfo, [params.id]);

  const pictureProps = dummyData.filter((el) => el.id === Number(params.id));
  //! 테스트 때 없애기

  return (
    <RestaurantMainDiv>
      <h1>{pictureProps[0].name}</h1>
      <Pictures picture={pictureProps[0].picture} />
      <BookMarkCheck />
      <RestaurantDiv>
        <Info />
        <Map address={pictureProps[0].address} name={pictureProps[0].name} />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default RestaurantInfo;
