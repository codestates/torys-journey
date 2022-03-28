import React from "react";
import Search from "../component/Search";
import dummyData from "./TESTTESTTEST";
import ShopList from "../component/ShopList";

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
