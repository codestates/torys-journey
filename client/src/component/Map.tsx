/*global kakao*/
import React, { useEffect, useState } from "react";

const { kakao } = window as any;

const Map = ({ address, name }: any) => {
  const [area, setArea] = useState<any>({}); // 좌표 따는 state
  console.log(address);
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

// const markerPosition = new kakao.maps.LatLng(
//   37.365264512305174,
//   127.10676860117488
// );
// const marker = new kakao.maps.Marker({
//   position: markerPosition, // 마커가 표시될 위치
// });
// marker.setMap(map);//마커가 지도위에 표시되도록 설정

// if (navigator.geolocation) {
//   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//   navigator.geolocation.getCurrentPosition(function (position) {
//     const lat = position.coords.latitude, // 위도
//       lon = position.coords.longitude; // 경도

//     const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//       message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

//     // 마커와 인포윈도우를 표시합니다
//     displayMarker(locPosition, message);
//   });
// } else {
//   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

//   const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
//     message = "geolocation을 사용할수 없어요..";

//   displayMarker(locPosition, message);
// }

// function displayMarker(locPosition: any, message: any) {
//   // 지도에 마커와 인포윈도우를 표시하는 함수입니다

//   // 마커를 생성합니다
//   const marker = new kakao.maps.Marker({
//     map: map,
//     position: locPosition,
//   });

//   const iwContent = message, // 인포윈도우에 표시할 내용
//     iwRemoveable = true;

//   // 인포윈도우를 생성합니다
//   const infowindow = new kakao.maps.InfoWindow({
//     content: iwContent,
//     removable: iwRemoveable,
//   });

//   // 인포윈도우를 마커위에 표시합니다
//   infowindow.open(map, marker);

//   // 지도 중심좌표를 접속위치로 변경합니다
//   map.setCenter(locPosition);
// }
