import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/Store";

import {
  RestaurantImg,
  RestaurantListDiv,
  RestaurantLink,
} from "../style/RestaurantList";

export type RootState = ReturnType<typeof store.getState>;

const ShopList = () => {
  const search = useSelector((data: RootState) => data.search);
  const dummyData = useSelector((data: RootState) => data.dummyData);
  // const dummyData = useSelector((data: RootState) => data.restaurantInformation);
  //! 테스트 시 이걸로 바꾸기
  return (
    <RestaurantListDiv>
      {search === ""
        ? dummyData.map((el: any, key) => (
            <Link to={`/restaurantinfo/${el.id}`} key={key}>
              <RestaurantImg src={el.picture[0]} alt="음식점 사진" />
              <div>{el.name}</div>
            </Link>
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
                    <RestaurantImg src={val.picture[0]} alt="식당" />
                    <div>{val.name}</div>
                    <div>{val.address}</div>
                  </Link>
                </RestaurantListDiv>
              );
            })}
    </RestaurantListDiv>

    // <RestaurantListDiv>
    //     <Link to={`/restaurantinfo/${data.id}`}>
    //       <RestaurantImg src={data.picture[0]} alt="음식점 사진" />
    //       <div>{data.name}</div>
    //       <div>{data.rating}</div>
    //     </Link>
    //   </RestaurantListDiv>
  );
};

export default ShopList;
