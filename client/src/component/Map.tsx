/*global kakao*/
import React, { useEffect, useState } from "react";

const { kakao } = window as any;

const Map = ({ address, name }: any) => {
  const [area, setArea] = useState<any>({}); // 좌표 따는 state
  // console.log(address);
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options); //지도 생성

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${address}`, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x); //좌표따는 것
        setArea(coords);
        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${name}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, [address, name]); //react에서 쓸 거면 useEffect로 꼭 감싸야함(이유 모름..)

  return (
    <div style={{ width: "36%", margin: " 2px 18px 0" }}>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          border: "3px solid",
          // margin: "0 20px 0 0",
        }}
      ></div>
      <a
        href={`https://map.kakao.com/link/to/${name},${area.Ma},${area.La}`}
        target="_blank"
        rel="noreferrer"
      >
        <button type="button">길찾기</button>
      </a>
      {/* 길찾기 */}
    </div>
  );
};
export default Map;
