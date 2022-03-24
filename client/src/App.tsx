import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import ProjectInfo from "./pages/ProjectInfo";
import Restaurant from "./pages/Restaurant";
import RestaurantInfo from "./pages/RestaurantInfo";
import Writing from "./pages/Writing";
import Main from "./pages/Main";
import Login from "./modal/Login";
import SignUp from "./modal/SignUp";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<ProjectInfo />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurantinfo" element={<RestaurantInfo />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
