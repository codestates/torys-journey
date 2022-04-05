import React, { useState } from "react";
import Search from "../component/Search";
import dummyData from "./TESTTESTTEST";
import axios from "axios";
import ShopList from "../component/ShopList";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  RestaurantH2,
  MapSearch,
} from "../style/RestaurantList";

export type Data = {
  id: number;
  picture: any;
  name: string;
  address: string;
  number: string;
  detailInfo: string;
  officeHours: string;
}; // 자식컴포넌트로 넘겨주기위해 export해 줍시다.

const Restaurant = () => {
  return (
    <RestaurantMainDiv>
      <Search />
      <MapSearch to="/here">내위치에서 검색</MapSearch>
      <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      <RestaurantDiv>
        <RestaurantH2>여기는 어떠신가요??</RestaurantH2>

        {dummyData.map((el) => (
          <ShopList key={el.id} data={el} />
        ))}
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default Restaurant;
