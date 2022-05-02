import React, { useState } from "react";
import SearchBar from "../../component/Search";
import MyLocation from "../../modal/MyLocation";
import { ButtonDiv, ParkMainDiv } from "../../style/Park";
import HotelList from "./HospitalList";
import { Link } from "react-router-dom";

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
          <Link to="add"><div> 병원등록 </div></Link>
        </div>
      </div>
      {clicked ? <MyLocation /> : ""}
      <HotelList/>
    </div>
  );
};

export default HospitalMain;
