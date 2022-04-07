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
  RestaurantLink,
  RestaurantDiv,
  RestaurantName,
  RestaurantMainDiv,
} from "../style/RestaurantList";

export type RootState = ReturnType<typeof store.getState>;

const ShopList = () => {
  // const dispatch = useDispatch();

  const search = useSelector((data: RootState) => data.search); //검색 필터링
  const dummyData = useSelector((data: RootState) => data.dummyData);

  // const [dummyData, setDummyData] = useState([]); //서버에서 받은 restaurant 정보 useState

  // const dummyData = useSelector((data: RootState) => data.restaurantInformation);
  //! 테스트 시 이걸로 바꾸기(서버 요청 안 되면 restaurant에서 받아서 redux에 넣어서 여기에서 불러와서 사용)

  // const callRestaurantInformation = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/restaurant`, {})
  //     .then((res) => {
  //       setDummyData(res.data);
  //       dispatch({ type: "information", payload: res.data }); //!다른 데에서 쓸일 없으면 삭제
  //     })
  //     .catch(() => alert("식당 정보를 불러오지 못하였습니다."));
  // };

  // useEffect(callRestaurantInformation, [dispatch, page]); //!리덕스 안 되면 수정하기 (안되면 함수에 그냥 useEffect 씌우기)
  //!-------------------------------------------------------------

  return (
    <RestaurantDiv>
      {search === ""
        ? dummyData.map((el: any, key) => (
            <RestaurantListDiv>
              <Link to={`/restaurantinfo/${el.id}`} key={key}>
                <RestaurantImg src={el.picture[0]} alt="음식점 사진" />
                <RestaurantName>{el.name}</RestaurantName>
                {/* <div>{el.rating}</div> //! 서버 연결되면 풀기 (평점) */}
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
                <RestaurantListDiv>
                  <Link to={`/restaurantinfo/${val.id}`} key={key}>
                    <RestaurantImg src={val.picture[0]} alt="식당" />
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
