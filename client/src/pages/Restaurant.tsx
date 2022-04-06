import React, { useState } from "react";
import Search from "../component/Search";
import dummyData from "./TESTTESTTEST";
import axios from "axios";
import ShopList from "../component/ShopList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import store from "../redux/Store";
import { useSelector } from "react-redux";

import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  RestaurantH2,
  MapSearch,
} from "../style/RestaurantList";

export type Data = {
  id: number;
  picture: any; //!서버 연결 시 모든 식당 조회 API 보고 수정
  name: string;
  address: string;
  number: string;
  detailInfo: string;
  officeHours: string;
}; // 자식컴포넌트로 넘겨주기위해 export해 줍시다.

// export type RootState = ReturnType<typeof store.getState>;

const Restaurant = () => {
  const dispatch = useDispatch();

  // const callRestaurantInformation = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/restaurant`, {})
  //     .then((res) => dispatch({ type: "information", payload: res.data }))
  //     .catch(() => alert("식당 정보를 불러오지 못하였습니다."));
  // };

  // const dummyData = useSelector(
  //   (data: RootState) => data.restaurantInformation
  // );

  // useEffect(callRestaurantInformation, []); //!리덕스 안 되면 수정하기

  dispatch({ type: "dummydata", payload: dummyData });

  return (
    <RestaurantMainDiv>
      <Search />
      <MapSearch to="/here">내위치에서 검색</MapSearch>
      <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      <RestaurantDiv>
        <RestaurantH2>여기는 어떠신가요??</RestaurantH2>
        <ShopList />
      </RestaurantDiv>
    </RestaurantMainDiv>

    // <Search />
    // <Link to="/shopenroll">
    //   <button>식당 등록</button>
    // </Link>
    // <RestaurantDiv>
    //   {information.map((el) => (
    //     <ShopList key={el.id} data={el} />
    //   ))}
    // </RestaurantDiv>
  );
};

export default Restaurant;
