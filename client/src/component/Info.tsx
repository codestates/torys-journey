import React from "react";
import { useState } from "react";
import DetailInfo from "./DetailInfo";
import ReviewMember from "./ReviewMember";
import ReviewNonMember from "./ReviewNonMember";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import { RestaurantTab, TabDiv, InfoDiv } from "../style/RestaurantInfo";

export type RootState = ReturnType<typeof store.getState>;

const Info = () => {
  const [selected, setSelected] = useState<string>();
  const onClick = (e: any) => {
    setSelected(e.target.textContent);
  }; //식당상세 or 리뷰 글씨 누르면 바뀌는 함수

  const isLogin = useSelector(
    (isLogin: RootState) => isLogin.changeLoginStatus.isLogin
  );

  return (
    <InfoDiv>
      <TabDiv>
        <RestaurantTab onClick={onClick}>식당 상세</RestaurantTab>
        <RestaurantTab onClick={onClick}>리뷰</RestaurantTab>
      </TabDiv>
      {selected === "리뷰" ? (
        isLogin === false ? (
          <ReviewMember />
        ) : (
          <ReviewNonMember />
        )
      ) : (
        <DetailInfo />
      )}
      {/*로그인했으면 reviewmember 로그인안된 상태면 reviewnonmember
 isLogin? <ReviewMember/>: <ReviewNonMember/>
 */}
    </InfoDiv>
  );
};

export default Info;
