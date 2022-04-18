import React from "react";
import { useState } from "react";
import DetailInfo from "./DetailInfo";
import ReviewMember from "./ReviewMember";
import ReviewNonMember from "./ReviewNonMember";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import {
  RestaurantTab,
  TabDiv,
  InfoDiv,
  RestaurantTab2,
  TabMenu,
  TabLi,
} from "../style/RestaurantInfo";

export type RootState = ReturnType<typeof store.getState>;

const Info = () => {
  const isLogin = useSelector(
    (isLogin: RootState) => isLogin.changeLoginStatus.isLogin
  );
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu = [{ name: "식당 상세" }, { name: "리뷰" }];
  const selectMenuHandler = (index: React.SetStateAction<number>) => {
    setCurrentTab(index);
  };

  return (
    <InfoDiv>
      <TabMenu>
        {tabMenu.map((menu, idx) => (
          <TabLi
            key={idx}
            className={idx === currentTab ? "submenu focused" : "submenu"}
            onClick={() => {
              selectMenuHandler(idx);
            }}
          >
            {menu.name}
          </TabLi>
        ))}
      </TabMenu>
      {currentTab === 1 ? (
        isLogin === true ? (
          <ReviewMember />
        ) : (
          <ReviewNonMember />
        )
      ) : (
        <DetailInfo />
      )}
    </InfoDiv>
  );
};

export default Info;
