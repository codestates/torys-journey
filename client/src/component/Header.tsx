import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/Store";
import Login from "../modal/Login";
import {
  HeaderTag,
  HeaderTitle,
  MypageLink,
  LoginButton,
} from "../style/Header";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.

const Header = () => {
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
    <HeaderTag>
      <HeaderTitle>Tory's-journey</HeaderTitle>
      <MypageLink to="/mypage/bookmark">MyPage</MypageLink>
      <LoginButton onClick={loginRequest}>LogIn</LoginButton>
      {login ? <Login loginRequest={loginRequest} /> : ""}
    </HeaderTag>
  );
};

export default Header;
