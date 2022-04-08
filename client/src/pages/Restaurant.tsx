import { useState } from "react";
import Search from "../component/Search";
import MyLocation from "../modal/MyLocation";
import ShopList from "../component/ShopList";

import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  RestaurantH2,
} from "../style/RestaurantList";

const Restaurant = () => {
  const [state, setState] = useState(false); //지도 modal state

  const handleMyLocation = () => {
    setState(!state);
  };

  return (
    <RestaurantMainDiv>
      <Search />
      {state === true ? <MyLocation /> : ""}
      <button onClick={handleMyLocation}>내 주변 검색</button>
      <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>

      <RestaurantDiv>
        <RestaurantH2>여기는 어떠신가요??</RestaurantH2>
        <ShopList />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default Restaurant;
