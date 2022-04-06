import { useState } from "react";
import Search from "../component/Search";
import MyLocation from "../modal/MyLocation";
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

// export type RootState = ReturnType<typeof store.getState>;//!서버 연결되서 shopList에서 작동되면 삭제하기

const Restaurant = () => {
  const dispatch = useDispatch(); //!서버 연결되서 shopList에서 작동되면 삭제하기

  const [state, setState] = useState(false); //지도 modal state

  const handleMyLocation = () => {
    setState(!state);
  };

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

  dispatch({ type: "dummydata", payload: dummyData }); //!서버 연결되서 shopList에서 작동되면 삭제하기

  return (
    <RestaurantMainDiv>
      <Search />
      {state === true ? <MyLocation /> : ""}
      <button onClick={handleMyLocation}>내 주변 검색</button>
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
