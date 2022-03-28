import React from "react";
import { Data } from "../pages/Restaurant";
import { Link } from "react-router-dom";

type dummyData = {
  data: Data;
}; // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.

const ShopList = (data: dummyData): React.ReactElement => {
  console.log(data);
  return (
    <div>
      <Link to={`/restaurant/info/${data.data.id}`}>
        <img src={data.data.picture} alt="음식점 사진" />
        <div>{data.data.name}</div>
      </Link>
    </div>
  );
};

export default ShopList;
