import React from "react";
import { Link } from "react-router-dom";

const MyPageMenu = () => {
  return (
    <div>
      <br />
      <br />
      <br />

      <Link to="/mypage/bookmark">북마크</Link>
      <br />
      <br />

      <Link to="/mypage/writingmanage">작성글 관리</Link>
      <br />
      <br />
      <Link to="/mypage/myreview">리뷰관리</Link>
      <br />
      <br />
      <Link to="/mypage/myinfo">정보수정</Link>
      <br />
      <br />
    </div>
  );
};

export default MyPageMenu;
