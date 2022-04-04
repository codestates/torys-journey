import React from "react";
import { Data } from "../pages/Restaurant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import {
  RestaurantImg,
  RestaurantListDiv,
  RestaurantLink,
} from "../style/RestaurantList";

export type RootState = ReturnType<typeof store.getState>;

type dummyData = {
  data: Data;
}; // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.

const ShopList = (data: dummyData): any => {
  // console.log(data);

  //   const shopList = useSelector(
  //     (shopList: RootState) => shopList.restaurantInformation
  //   );
  //   console.log(shopList); //!useEffect로 작동해보기

  return (
    <RestaurantListDiv>
      <Link to={`/restaurantinfo/${data.data.id}`}>
        <RestaurantImg src={data.data.picture[0]} alt="음식점 사진" />

        <div>{data.data.name}</div>
      </Link>
    </RestaurantListDiv>
  );
};

export default ShopList;
