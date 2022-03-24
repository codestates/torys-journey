import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/mypage/bookmark">MyPage</Link>
      {/* 고정 */}
      <button>LogIn</button>
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
    </div>
  );
};

export default Main;
