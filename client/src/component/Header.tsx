import React, { useState } from "react";
import Login from "../modal/Login";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../style/OauthButton/logoo.png";

import {
  HeaderTag,
  HeaderTitle,
  MypageLink,
  LoginDiv,
  DivContainer,
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
        alert("로그아웃에 성공하였습니다.");
      })
      .then(() => {
        localStorage.clear();
      })
      .then(() => {
        navigate("/");
      })
      .then(() => window.location.reload()) //! 블로그(리랜더링)
      .catch(() => alert("로그아웃에 실패하였습니다."));
  };

  return (
    <HeaderTag>
      <Link to="/"><HeaderTitle src={logo}></HeaderTitle></Link>
      <DivContainer>
        <MypageLink to="/mypage/bookmark">Mypage</MypageLink>

        {!localStorageTokenCheck ? (
          <LoginDiv onClick={loginRequest}>Login</LoginDiv>
        ) : (
          <LoginDiv onClick={handleLogOut}>Logout</LoginDiv>
        )}
      </DivContainer>
      {login ? <Login loginRequest={loginRequest} /> : ""}
    </HeaderTag>
  );
};

export default Header;
