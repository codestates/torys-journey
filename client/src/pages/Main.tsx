import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      메인입니다.
      <br />
      <Link to="/login">로그인</Link>
      <br></br>
      <Link to="/restaurant">레스토랑</Link>
      <br></br>
      <Link to="/restaurant">병원</Link>
      <br />
      <Link to="/restaurant">공원</Link>
      <br />
      <Link to="/restaurant">ㅁㄴㅇ리ㅓㅁㄴ이ㅏㄹ</Link>
    </div>
  );
};

export default Main;
