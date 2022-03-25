import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import ProjectInfo from "./pages/ProjectInfo";
import Restaurant from "./pages/Restaurant";
import RestaurantInfo from "./pages/RestaurantInfo";
import Writing from "./pages/Writing";
import Main from "./pages/Main";
import Hotel from "./pages/Hotel";
import Park from "./pages/Park";
import Hospital from "./pages/Hospital";
import Login from "./modal/Login";
import SignUp from "./modal/SignUp";
import Navbar from "./component/Navbar";
import WritingManage from "./pages/WritingManage";
import MyReview from "./pages/MyReview";
import MyInfo from "./pages/MyInfo";

function App() {
  return (
    <div>
      <Home />
      <Navbar /> 고정
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage/writingmanage" element={<WritingManage />} />
        <Route path="/mypage/bookmark" element={<MyPage />} />
        <Route path="/mypage/myreview" element={<MyReview />} />
        <Route path="/mypage/myinfo" element={<MyInfo />} />
        <Route path="/info" element={<ProjectInfo />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/park" element={<Park />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/restaurantinfo" element={<RestaurantInfo />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/signup" element={<SignUp />} />{" "}
        {/*모달임. 확인용으로 둔 것. 나중에 삭제*/}
      </Routes>
    </div>
  );
}

export default App;
