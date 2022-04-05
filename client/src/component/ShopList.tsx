import React from "react";
import { Data } from "../pages/Restaurant";
import { Link } from "react-router-dom";
import {
  RestaurantImg,
  RestaurantListDiv,
  RestaurantLink,
} from "../style/RestaurantList";

// type informationProps = {
//   data : {
//     id:number,
//     name: string,
//     photo: [string]
//     address: string,
//     number: string,
//     detailInfo: string,
//     officeHours: string
// }
// }

type dummyData = {
  data: Data;
}; // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.

const ShopList = ({ data }: dummyData) => {
  return (
    <RestaurantListDiv>
      <Link to={`/restaurantinfo/${data.id}`}>
        <RestaurantImg src={data.picture[0]} alt="음식점 사진" />

        <div>{data.name}</div>
      </Link>
    </RestaurantListDiv>

    // <RestaurantListDiv>
    //     <Link to={`/restaurantinfo/${data.id}`}>
    //       <RestaurantImg src={data.picture[0]} alt="음식점 사진" />

    //       <div>{data.name}</div>
    //     </Link>
    //   </RestaurantListDiv>
  );
};

export default ShopList;
