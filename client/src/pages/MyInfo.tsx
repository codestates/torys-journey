import React, { useState } from "react";
import MyPageMenu from "../component/MyPageMenu";
import SignOut from "../modal/SignOut";

const MyInfo = () => {
  const [requestSignOut, setRequestSignOut] = useState<boolean>(false); // 모달 useState

  const signOutRequest = () => {
    setRequestSignOut(!requestSignOut); //탈퇴 요청 시 모달 띄우기
  };
  return (
    <div>
      <MyPageMenu />
      정보수정
      <br />
      password
      <input type="password" placeholder="기존 비밀번호를 입력하세요" />
      password
      <input type="password" placeholder="새로운 비밀번호를 입력하세요" />
      password confirm
      <input type="password" placeholder="새로운 비밀번호를 다시 입력하세요" />
      <button>확인</button>
      <button onClick={signOutRequest}>회원탈퇴</button>
      {requestSignOut ? <SignOut signOutRequest={signOutRequest} /> : ""}{" "}
      {/*가라임, 수정해야함*/}
    </div>
  );
};

export default MyInfo;
