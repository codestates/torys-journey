import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import Pictures from "../component/Pictures";
import Info from "../component/Info";
import Map from "../component/Map";
import dummyData from "../pages/TESTTESTTEST";

const RestaurantInfo = () => {
  const params = useParams<any>();
  // console.log(Number(params.id) - 1);

  const pictureProps = dummyData.filter((el) => el.id === Number(params.id));
  // console.log(pictureProps);

  return (
    <div>
      <h1>레스토랑 인포 페이지입니다</h1>
      {/* <img
        src={dummyData[Number(params.id) - 1].picture}
        alt="사진을 불러와야 합니다.."
      /> */}
      {pictureProps.map((el) => (
        <Pictures key={el.address} data={el.picture} /> //같은 id 사진 띄우기. 더미데이터 사진 id 바꿔야함.
      ))}
      <Info />
      {pictureProps.map((el) => (
        <Map key={el.address} address={el.address} name={el.name} /> //같은 id 사진 띄우기. 더미데이터 사진 id 바꿔야함.
      ))}
    </div>
  );
};

export default RestaurantInfo;
