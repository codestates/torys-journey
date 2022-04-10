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
} from "../style/RestaurantInfo";
import styled from "styled-components";

export type RootState = ReturnType<typeof store.getState>;

const Info = () => {
  const [selected, setSelected] = useState<string>();
  const [colored, setColored] = useState<boolean>(true);

  const onClick = (e: any) => {
    setSelected(e.target.textContent);
  }; //식당상세 or 리뷰 글씨 누르면 바뀌는 함수
  const colorChange = () => {
    setColored(!colored);
  };
  const isLogin = useSelector(
    (isLogin: RootState) => isLogin.changeLoginStatus.isLogin
  );

  return (
    <InfoDiv>
      <TabDiv>
        {colored ? (
          <RestaurantTab2
            onClick={(e) => {
              onClick(e);
              colorChange();
            }}
          >
            식당 상세
          </RestaurantTab2>
        ) : (
          <RestaurantTab
            onClick={(e) => {
              onClick(e);
              colorChange();
            }}
          >
            식당 상세
          </RestaurantTab>
        )}
        {!colored ? (
          <RestaurantTab2
            onClick={(e) => {
              onClick(e);
              colorChange();
            }}
          >
            리뷰
          </RestaurantTab2>
        ) : (
          <RestaurantTab
            onClick={(e) => {
              onClick(e);
              colorChange();
            }}
          >
            리뷰
          </RestaurantTab>
        )}
        {/* <RestaurantTab
          onClick={(e) => {
            onClick(e);
            colorChange();
          }}
        >
          식당 상세
        </RestaurantTab> */}
      </TabDiv>

      {selected === "리뷰" ? (
        isLogin === true ? (
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
