// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import HotelList from "../../component/Hotel/HotelMain/HotelList";
// import Search from "../../component/Search";
// import MyLocation from "../../component/MyLocation";

// const Hotel = () => {
//   const [mapOpen, setMapOpen] = useState(false);
//   const handleMyLocation = () => {
//     setMapOpen(!mapOpen);
//   };
//   return (
//     <div>
//       <Search />
//       <div onClick={handleMyLocation}>내 주변 검색</div>
//       <Link to="/hotelenroll">호텔 등록</Link>
//       {mapOpen === true ? <MyLocation /> : ""}
//       <HotelList />
//     </div>
//   );
// };

// export default Hotel;

import React from "react";

const Hotel = () => {
  return <div>HotelMain</div>;
};

export default Hotel;
