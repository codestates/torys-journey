import React, { useEffect } from "react";
import { MainDiv } from "../style/Map";
import { useSelector } from "react-redux";
import store from "../redux/Store";
const { kakao } = window as any;

export type RootState = ReturnType<typeof store.getState>;
const MyLocation = () => {
  
  const geocoder = new kakao.maps.services.Geocoder();
  const dummyData = useSelector(
    (data: RootState) => data.restaurantInformation
  );
//{id: 11, name: '구독 ', photo: Array(4), rating: '5.0', address: ' 경기도 화성시 장지로 60-44', …}
  useEffect(() => {
    //!!!!!! 지도 만들기
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 5, //지도 확대
    };
    const map = new kakao.maps.Map(container, options);
    //!!!!!!!!!!!!!!!!!!!!!!식당들 위치에 마커표시
    dummyData.map((el:any) =>
      geocoder.addressSearch(
        `${el.address}`,
        function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x); //좌표따는 것

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            // 커스텀 오버레이에 표시할 컨텐츠 입니다
            // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
            // 별도의 이벤트 메소드를 제공하지 않습니다
            const content =
              `<div class="wrap" style="background:white">` +
              `  <div class="info">` +
              `        <div class="title" style="padding-left:7px; background:#abd2cd; color:#494747; font-size: 18px; font-weight: bold; padding-bottom:2px">` +
              `            ${el.name}` +
              `        </div>` +
              `        <div class="body" style="display:flex; flex-direction: row; padding:15px; font-size:15px">` +
              `            <div class="img" style= "margin-right: 10px">` +
              `                <img src=${el.photo[0]} width="73" height="70">` +
              `           </div>` +
              `            <div class="desc">` +
              `                <div class="ellipsis">${el.address}</div>` +
              `                <div style="margin-top:20px;" ><a href="https://torysjourney.site/restaurantinfo/${el.id}" target="_self" class="link" style="color:blue; text-decoration:none;"><img src="https://cdn-icons-png.flaticon.com/512/1150/1150592.png" height="20px"/>상세페이지</a></div>` +
              `            </div>` +
              `        </div>` +
              `    </div>` +
              `</div>`;

            // 마커 위에 커스텀오버레이를 표시합니다
            // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니
            var overlay = new kakao.maps.CustomOverlay({
              content: content,
              map: map,
              position: marker.getPosition(),
              clickable: true,
            });

            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            kakao.maps.event.addListener(marker, "click", function () {
              overlay.setMap(map);
            });
            // 마커를 클릭했을 때 커스텀 오버레이 닫기
            kakao.maps.event.addListener(map, "click", function () {
              overlay.setMap(null);
            });
          }
        }
      )

    );

    //!!!!!!!!!!!!!!!!내위치
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any, message: any) {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, []);

  return (
    <MainDiv>
      <div id="map" style={{ width: "800px", height: "500px" }}></div>
    </MainDiv>
  );
};

export default MyLocation;
