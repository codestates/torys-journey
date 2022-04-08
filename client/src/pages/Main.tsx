import React from "react";
import { Link } from "react-router-dom";
import store from "../redux/Store";

import {
  MainImg,
  MainImgTag,
  MainImgContainer,
  MainTag,
  MainTag2,
  LinkTag,
} from "../style/Main";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.

const Main = () => {
  return (
    <>
      <MainTag>
        <MainImgContainer>
          <LinkTag to="/restaurant">
            <MainImg src="https://story.holapet.com/wp-content/uploads/2018/10/hp201810-ka009-2.jpg" />
            <MainImgTag>
              {new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]}
              <br />
              Go to Restaurant
            </MainImgTag>
          </LinkTag>
        </MainImgContainer>

        <MainImgContainer>
          <LinkTag to="/hotel">
            <MainImg src="https://www.10wallpaper.com/wallpaper/1366x768/1411/puppy_retriever_rest-Animal_Photo_Wallpaper_1366x768.jpg" />
            <MainImgTag>
              {new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]}
              <br />
              Go to Hotel
            </MainImgTag>
          </LinkTag>
        </MainImgContainer>

        <MainImgContainer>
          <LinkTag to="/hospital">
            <MainImg src="https://images.mypetlife.co.kr/content/uploads/2019/02/09154442/shutterstock_1272088093.jpg" />
            <MainImgTag>
              {new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]}
              <br /> Go to Hospital
            </MainImgTag>
          </LinkTag>
        </MainImgContainer>
      </MainTag>
      <MainTag2>
        <MainImgContainer>
          <LinkTag to="/park">
            <MainImg src="https://image-notepet.akamaized.net/resize/620x-/seimage/20191113%2Ff6f280560384db2d6c6d797a281e52b1.png" />
            <MainImgTag>
              {new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]}
              <br /> Go to Park
            </MainImgTag>
          </LinkTag>
        </MainImgContainer>

        <MainImgContainer>
          <LinkTag to="/info">
            <MainImg src="https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg" />
            <MainImgTag>
              {new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]}
              <br />
              Go to Info
            </MainImgTag>
          </LinkTag>
        </MainImgContainer>
      </MainTag2>
    </>
  );
};

export default Main;
