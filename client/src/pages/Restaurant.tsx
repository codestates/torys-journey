import { useState } from "react";
import Search from "../component/Search";
import MyLocation from "../modal/MyLocation";
import ShopList from "../component/ShopList";

import {
  RestaurantDiv,
  RestaurantMainDiv,
  ShopEnrollLink,
  ButtonDiv,
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
      <ButtonDiv>
        <button onClick={handleMyLocation}>내 주변 검색</button>
        <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      </ButtonDiv>
      <RestaurantDiv>
        <ShopList />
      </RestaurantDiv>
    </RestaurantMainDiv>

    // <Search />
    // <Link to="/shopenroll">
    //   <button>식당 등록</button>
    // </Link>
    // <RestaurantDiv>
    //   {information.map((el) => (
    //     <ShopList key={el.id} data={el} />
    //   ))}
    // </RestaurantDiv>
  );
};

export default Restaurant;
