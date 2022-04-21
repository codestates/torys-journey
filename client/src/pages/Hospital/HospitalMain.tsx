import React, { useState } from "react";
import SearchBar from "../../component/Restaurant/RestaurantMain/Search";
import MyLocation from "../../modal/RestaurantMain/MyLocation";
import { ButtonDiv, ParkMainDiv } from "../../style/Park";
import HotelList from "./HospitalList";

const HospitalMain = () => {
  const [clicked, setClicked] = useState(false);
  const handleMap = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div>
        <SearchBar />
        <div>
          <div onClick={handleMap}>내 주변 검색</div>
          <div> 식당등록 </div>
        </div>
      </div>
      {clicked ? <MyLocation /> : ""}
      <HotelList/>
    </div>
  );
};

export default HospitalMain;
