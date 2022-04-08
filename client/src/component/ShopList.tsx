import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

import store from "../redux/Store";

import {
  RestaurantImg,
  RestaurantListDiv,
  RestaurantDiv,
} from "../style/RestaurantList";

export type RootState = ReturnType<typeof store.getState>;

const ShopList = () => {
  const dispatch = useDispatch();

  const search = useSelector((data: RootState) => data.search); //검색 필터링

  const [dummyData, setDummyData] = useState([]); //서버에서 받은 restaurant 정보 useState
  console.log("dummy", dummyData);

  const callRestaurantInformation = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant`, {})
      .then((res) => {
        console.log("res", res.data.data);
        setDummyData(res.data.data);
        dispatch({ type: "information", payload: res.data.data });
      })
      .catch(() => alert("식당 정보를 불러오지 못하였습니다."));
  };

  useEffect(callRestaurantInformation, [dispatch]);

  return (
    <RestaurantDiv>
      {search === ""
        ? dummyData.map((el: any, key) => (
            <RestaurantListDiv key={key}>
              <Link
                to={`/restaurantinfo/${el.id}`}
                style={{ textDecoration: "none" }}
              >
                <RestaurantImg src={el.photo[0]} alt="음식점 사진" />
                <div>{el.name}</div>
                <div>{el.rating}</div>
              </Link>
            </RestaurantListDiv>
          ))
        : dummyData
            .filter((val: any) => {
              if (search === "") {
                return undefined;
              } else if (
                // button === true &&
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              } else if (
                // button === true &&
                val.address.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val: any, key) => {
              return (
                <RestaurantListDiv key={key}>
                  <Link to={`/restaurantinfo/${val.id}`}>
                    <RestaurantImg src={val.photo[0]} alt="식당" />
                    <div>{val.name}</div>
                    <div>{val.address}</div>
                  </Link>
                </RestaurantListDiv>
              );
            })}
    </RestaurantDiv>
  );
};

export default ShopList;
