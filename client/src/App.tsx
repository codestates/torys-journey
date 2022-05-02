import React, { useEffect } from "react";
import axios from "axios";
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
//import HotelEnroll from "./pages/Hotel/HotelEnroll";
import ParkMain from "./pages/Park/ParkMain";
import Navbar from "./component/Navbar";
import WritingManage from "./pages/MyPage/WritingManage";
import MyReview from "./pages/MyPage/MyReview";
import MyInfo from "./pages/MyPage/MyInfo";
import ShopEnroll from "./pages/Restaurant/ShopEnroll";
import Header from "./component/Header";
//import ParkList from "./pages/Park/ParkList";
import HospitalMain from "./pages/Hospital/HospitalMain";

export type RootState = ReturnType<typeof store.getState>;

function App(): any {
  const dispatch = useDispatch();
  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");

  let userInfo = {
    id: 0,
    name: "",
    email: "",
  };

  const checkLoginInfo = () => {
    if (localStorageTokenCheck) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user`, {
          headers: { authorization: `Bearer ${localStorageTokenCheck}` },
        })
        .then(
          (res) => (
            (userInfo.id = res.data.data.id),
            (userInfo.name = res.data.data.name),
            (userInfo.email = res.data.data.email),
            console.log(userInfo, "1111")
          )
        )
        .catch(() => alert("사용자 정보가 없습니다."));
    }
  };

  useEffect(() => {
    if (localStorageTokenCheck) {
      checkLoginInfo();
      dispatch(loginCheck());
    }
  }, []);

  return (
    <div>
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
        {/* <Route path="/hotelenroll" element={<HotelEnroll />} /> */}
        <Route path="/park" element={<ParkMain />} />
        {/* <Route path="/park/:id" element={<ParkList />} /> */}
        <Route path="/hospital" element={<HospitalMain />} />
      </Routes>
    </div>
  );
}

export default App;
