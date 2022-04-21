import React from "react";
import HotelList from "../../component/Hotel/HotelMain/HotelList";
import Search from "../../component/Search";

const Hotel = () => {
  return (
    <div>
      <Search />
      <button>내 주변 검색</button>
      <button>식당 등록</button>
      <HotelList />
    </div>
  );
};

export default Hotel;
