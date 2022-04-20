import React from "react";
import { MenuList, MenuItem, MenuLink } from "../../style/MypageMenu";
import { MyPageMenuDiv } from "../../style/Mypage";
const MyPageMenu = () => {
  return (
    <MyPageMenuDiv>
      <MenuList>
        <MenuItem>
          <MenuLink to="/mypage/bookmark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7131/7131186.png"
              alt=""
              height="30px"
            />{" "}
            북마크
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/mypage/writingmanage">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2911/2911228.png"
              alt=""
              height="30px"
            />{" "}
            작성글 관리
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/mypage/myreview">
            <img
              src="https://cdn-icons-png.flaticon.com/512/792/792101.png"
              alt="리뷰"
              height="30px"
            />{" "}
            리뷰관리
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/mypage/myinfo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/503/503822.png"
              alt=""
              height="30px"
            />{" "}
            정보수정
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MyPageMenuDiv>
  );
};

export default MyPageMenu;
