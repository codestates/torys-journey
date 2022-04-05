import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import Pictures from "../component/Pictures";
import Info from "../component/Info";
import Map from "../component/Map";
import BookMarkCheck from "../component/BookMarkCheck";
import dummyData from "../pages/TESTTESTTEST";
import { RestaurantDiv, RestaurantMainDiv } from "../style/RestaurantInfo";

const RestaurantInfo = () => {
  const params = useParams<any>();
  // console.log(Number(params.id) - 1);

  const pictureProps = dummyData.filter((el) => el.id === Number(params.id));
  console.log(pictureProps);

  return (
    <RestaurantMainDiv>
      <h1>{pictureProps[0].name}</h1>
      {/* <img
        src={dummyData[Number(params.id) - 1].picture}
        alt="사진을 불러와야 합니다.."
      /> */}
      <Pictures key={pictureProps[0].id} picture={pictureProps[0].picture} />
      {/* 같은 id 사진 띄우기. 더미데이터 사진 id 바꿔야함. //! key 수정해야함. */}
      <RestaurantDiv>
        <BookMarkCheck />
        <Info />
        <Map
          key={pictureProps[0].address}
          address={pictureProps[0].address}
          name={pictureProps[0].name}
        />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default RestaurantInfo;
