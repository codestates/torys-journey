import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./redux/Store";
import { useDispatch } from "react-redux";
import { loginCheck } from "./redux/Reducer";
import "./App.css";
import MyPage from "./pages/MyPage/MyPage";
import ProjectInfo from "./pages/ProjectInfo";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantInfo from "./pages/Restaurant/RestaurantInfo";
import Main from "./pages/Main";
import Hotel from "./pages/Hotel/Hotel";
import Park from "./pages/Park";
import Hospital from "./pages/Hospital";
import Navbar from "./component/Navbar";
import WritingManage from "./pages/MyPage/WritingManage";
import MyReview from "./pages/MyPage/MyReview";
import MyInfo from "./pages/MyPage/MyInfo";
import ShopEnroll from "./pages/Restaurant/ShopEnroll";
import Header from "./component/Header";

export type RootState = ReturnType<typeof store.getState>;

function App(): any {
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: RootState) => state.changeLoginStatus.isLogin
  );
  // console.log("isLogin", isLogin);
  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");

  useEffect(() => {
    if (localStorageTokenCheck) {
      dispatch(loginCheck());
    }
  }, []);

  return (
    <div>
      {/* <Home /> */}
      <Header />
      <Navbar />
      <Routes>
        {localStorageTokenCheck ? (
          <Route path="/" element={<Main />} />
        ) : (
          <Route path="/" element={<ProjectInfo />} />
        )}
        <Route path="/mypage/writingmanage" element={<WritingManage />} />
        <Route path="/mypage/bookmark" element={<MyPage />} />
        <Route path="/mypage/myreview" element={<MyReview />} />
        <Route path="/mypage/myinfo" element={<MyInfo />} />
        <Route path="/info" element={<ProjectInfo />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/shopenroll" element={<ShopEnroll />} />
        <Route path="/restaurantinfo/:id" element={<RestaurantInfo />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/park" element={<Park />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </div>
  );
}

export default App;
