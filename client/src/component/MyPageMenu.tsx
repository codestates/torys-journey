import React from "react";
import { Link } from "react-router-dom";
import { MenuList, MenuItem, MenuLink } from "../style/MypageMenu";

const MyPageMenu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink to="/mypage/bookmark">북마크</MenuLink>
      </MenuItem>

      <MenuItem>
        <MenuLink to="/mypage/writingmanage">작성글 관리</MenuLink>
      </MenuItem>

      <MenuItem>
        <MenuLink to="/mypage/myreview">리뷰관리</MenuLink>
      </MenuItem>

      <MenuItem>
        <MenuLink to="/mypage/myinfo">정보수정</MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default MyPageMenu;
