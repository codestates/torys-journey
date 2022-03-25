import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../modal/Login";

const Main = () => {
  const [login, setLogin] = useState<boolean>(false); // 모달 useState

  const loginRequest = () => {
    setLogin(!login); //탈퇴 요청 시 모달 띄우기
  };

  return (
    <div>
      <Link to="/mypage/bookmark">MyPage</Link>
      {/* 고정 */}
      <button onClick={loginRequest}>LogIn</button>
      {/* 고정 */}
      메인입니다.
      <br />
      <Link to="/restaurant">Restaurant</Link>
      <br></br>
      <Link to="/hotel">Hotel</Link>
      <br></br>
      <Link to="/hospital">Hospital</Link>
      <br />
      <Link to="/park">Park</Link>
      <br />
      <Link to="/info">Info</Link>
      {login ? <Login loginRequest={loginRequest} /> : ""}
    </div>
  );
};

export default Main;
