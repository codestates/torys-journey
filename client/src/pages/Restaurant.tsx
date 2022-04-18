import { useState } from "react";
import Search from "../component/Search";
import MyLocation from "../modal/MyLocation";
import ShopList from "../component/ShopList";

import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  ButtonDiv,
  MySearchDiv,
} from "../style/RestaurantList";

const Restaurant = () => {
  const [state, setState] = useState(false); //지도 modal state

  const handleMyLocation = () => {
    setState(!state);
  };

  return (
    <RestaurantMainDiv>
      <Search />
      <ButtonDiv>
        <MySearchDiv onClick={handleMyLocation}>내 주변 검색</MySearchDiv>
        <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      </ButtonDiv>
      {state === true ? <MyLocation /> : ""}
      <RestaurantDiv>
        <ShopList />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default Restaurant;
