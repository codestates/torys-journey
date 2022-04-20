import React from "react";
import { useState } from "react";
import DetailInfo from "./DetailInfo";
import ReviewMember from "../Review/ReviewMember";
import ReviewNonMember from "../Review/ReviewNonMember";
import { useSelector } from "react-redux";
import store from "../../../redux/Store";
import { InfoDiv, TabMenu, TabLi } from "../../../style/RestaurantInfo";

export type RootState = ReturnType<typeof store.getState>;

const Info = () => {
  const isLogin = useSelector(
    (isLogin: RootState) => isLogin.changeLoginStatus.isLogin
  );
  const [currentTab, setCurrentTab] = useState(0); //tab state
  const tabMenu = [{ name: "식당 상세" }, { name: "리뷰" }]; //tab 목록
  const selectMenuHandler = (index: React.SetStateAction<number>) => {
    setCurrentTab(index);
  }; //index로 state를 변환시켜서 적용하는 함수

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
