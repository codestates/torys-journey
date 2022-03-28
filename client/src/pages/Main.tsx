import React, { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../component/Star";

import Login from "../modal/Login";

const Main = () => {
  const [login, setLogin] = useState<boolean>(false); // 모달 useState

  const loginRequest = () => {
    setLogin(!login); //탈퇴 요청 시 모달 띄우기
  };

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
