import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/Store";

import Login from "../modal/Login";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.

const Main = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<boolean>(false); // 모달 useState

  const loginRequest = () => {
    setLogin(!login); //탈퇴 요청 시 모달 띄우기
  };
  const localId = useSelector((localId: RootState) => localId.Reducer.id);
  const localStorageTokenCheck = localStorage.getItem(localId);

  useEffect(() => {
    if (localStorageTokenCheck) {
      dispatch({ type: "login", payload: { isLogin: true } });
    } else {
      dispatch({ type: "login", payload: { isLogin: false } });
    }
  }, []); //login 하면 토큰이 있느냐 없느냐로 로그인 유지

  return (
    <div>
      <br />
      <Link to="/mypage/bookmark">MyPage</Link>
      {/* 고정 */}
      <button onClick={loginRequest}>LogIn</button>
      {/* 고정 */}
      메인입니다.
      <br />
      <br />
      <br />
      <br />
      <Link to="/restaurant">Restaurant</Link>
      <br />
      <br></br>
      <Link to="/hotel">Hotel</Link>
      <br />
      <br />
      <Link to="/hospital">Hospital</Link>
      <br />
      <br />
      <Link to="/park">Park</Link>
      <br />
      <br />
      <Link to="/info">Info</Link>
      {login ? <Login loginRequest={loginRequest} /> : ""}
    </div>
  );
};

export default Main;
