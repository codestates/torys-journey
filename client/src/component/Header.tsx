import React, { useState } from "react";
import Login from "../modal/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  HeaderTag,
  HeaderTitle,
  MypageLink,
  LoginButton,
} from "../style/Header";

const Header = () => {
  // ! 로그인 모달창
  const [login, setLogin] = useState<boolean>(false); // 모달 useState

  const loginRequest = () => {
    setLogin(!login);
  };
  // ! 로그인 모달창
  const navigate = useNavigate();
  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");
  // console.log(localStorageTokenCheck);

  const handleLogOut = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/logout`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => {
        localStorage.clear();
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => alert("로그아웃에 실패하였습니다."));
  };

  return (
    <HeaderTag>
      <HeaderTitle>Tory's-journey</HeaderTitle>
      <MypageLink to="/mypage/bookmark">MyPage</MypageLink>
      <LoginButton onClick={loginRequest}>LogIn</LoginButton>
      <button onClick={handleLogOut}>LogOut</button>
      {login ? <Login loginRequest={loginRequest} /> : ""}
    </HeaderTag>
  );
};

export default Header;
