import React, { useState } from "react";
import Search from "../component/Search";
import dummyData from "./TESTTESTTEST";
import axios from "axios";
import { useDispatch } from "react-redux";

import ShopList from "../component/ShopList";
import { useEffect } from "react";

export type Data = {
  id: number;
  picture: string;
  name: string;
  address: string;
  number: string;
  detailInfo: string;
  officeHours: string;
}; // 자식컴포넌트로 넘겨주기위해 export해 줍시다.

const Restaurant = () => {
  console.log(dummyData);

  // const restaurantDisplay = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/restaurant`, {
  //       withCredentials: true,
  //     })
  //     .then((res) =>
  //       dispatch({
  //         type: "restaurant",
  //         payload: {
  //           id: res.data.data.id,
  //           name: res.data.data.name,
  //           photo: res.data.data.photo,
  //           address: res.data.data.address,
  //           number: res.data.data.number,
  //           detailInfo: res.data.data.detailInfo,
  //           officeHours: res.data.data.officeHours,
  //         },
  //       })
  //     )
  //     .catch((ewr) => console.log("ewr")); // 서버에 요청해서 사진 받기.
  // };

  // useEffect(() => {
  //   restaurantDisplay();
  // }); //! useEffect로 받기. 안 되면 그냥 useState로 넘겨서 사진 띄우기.

  return (
    <div>
      <Search />
      <button>식당 등록</button>
      {dummyData.map((el) => (
        <ShopList key={el.id} data={el} />
      ))}
    </div>
  );
};

export default Restaurant;
