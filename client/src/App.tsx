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
import HotelMain from "./pages/Hotel/HotelMain";
import ParkMain from "./pages/Park/ParkMain";
import Navbar from "./component/Navbar";
import WritingManage from "./pages/MyPage/WritingManage";
import MyReview from "./pages/MyPage/MyReview";
import MyInfo from "./pages/MyPage/MyInfo";
import ShopEnroll from "./pages/Restaurant/ShopEnroll";
import Header from "./component/Header";
import ParkList from "./pages/Park/Component/ParkList";
import HospitalMain from "./pages/Hospital/HospitalMain";
import AddPark from "./pages/Park/AddPark";
import AddHospital from "./pages/Hospital/AddHospital";

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
        <Route path="/hotel" element={<HotelMain />} />
        <Route path="/park" element={<ParkMain />} />
        <Route path="/park/add" element={<AddPark />} />
        <Route path="/park/:id" element={<ParkList />} />
        <Route path="/hospital" element={<HospitalMain />} />
        <Route path="/hospital/add" element={<AddHospital />} />
        
      </Routes>
    </div>
  );
}

export default App;
