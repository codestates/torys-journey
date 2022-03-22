import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import ProjectInfo from "./pages/ProjectInfo";
import Restaurant from "./pages/Restaurant";
import RestaurantInfo from "./pages/RestaurantInfo";
import Writing from "./pages/Writing";

//내일 크루분께 배포자동화를 하였을 때, 만약에 팀원 아이디로 작업하고 다른 팀원이 작업을 하면서 실시간으로 이게 되는지 안되는지 확인을 하고싶을 때(서버와 잘 구동이 되는지) 일일이 확인할 때마다 마지를 해서 확인을 하여야 하는 부분인지.

//지도 API로 식당들만, 호텔들만, 병원들만 이런식으로 검색이 가능하게 그 정보만 따로 가지고 올 수 있는지.
//만약 없다면 검색창을 어떤 식으로 하는 것이 좋을지.
//새로고침 로그인 유지
//물어보기
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<ProjectInfo />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurantinfo" element={<RestaurantInfo />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </div>
  );
}

export default App;
