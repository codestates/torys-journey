import React from "react";
import { Link } from "react-router-dom";

const MyPageMenu = () => {
  return (
    <div>
      <Link to="/mypage/bookmark">북마크</Link>
      <Link to="/mypage/writingmanage">작성글 관리</Link>
      <Link to="/mypage/myreview">리뷰관리</Link>
      <Link to="/mypage/myinfo">정보수정</Link>
    </div>
  );
};

export default MyPageMenu;
