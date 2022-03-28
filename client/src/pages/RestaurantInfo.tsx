import React from "react";
import Pictures from "../component/Pictures";
import Info from "../component/Info";
import Map from "../component/Map";

const RestaurantInfo = () => {
  return (
    <div>
      <h1>레스토랑 인포 페이지입니다</h1>
      <Pictures />
      <Info />
      <Map />
    </div>
  );
};

export default RestaurantInfo;
