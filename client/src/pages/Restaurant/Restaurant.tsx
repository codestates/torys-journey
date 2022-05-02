import { useState } from "react";
import Search from "../../component/Search";
import MyLocation from "../../component/MyLocation";
import ShopList from "../../component/Restaurant/RestaurantMain/ShopList";

import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  ButtonDiv,
  MySearchDiv,
} from "../../style/RestaurantList";

const Restaurant = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const handleMyLocation = () => {
    setMapOpen(!mapOpen);
  };

  return (
    <RestaurantMainDiv>
      <Search />
      <ButtonDiv>
        <MySearchDiv onClick={handleMyLocation}>내 주변 검색</MySearchDiv>
        <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      </ButtonDiv>
      {mapOpen === true ? <MyLocation /> : ""}
      <RestaurantDiv>
        <ShopList />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default Restaurant;
