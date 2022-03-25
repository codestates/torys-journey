import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const { naver } = window as any;

const NaverOauth: React.FC = () => {
  const location = useLocation();

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "7IxLOwtePiMM2_x0nQgw",
      callbackUrl: "http://localhost:3000/",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 3, height: 60 }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);
  }; //네이버 토큰 받아오는 코드.

  useEffect(() => {
    initializeNaverLogin();
    //   getNaverToken();
  }, []);

  return (
    <div>
      <div
        id="naverIdLogin"
        onClick={() => {
          getNaverToken();
        }}
      />
      {/* id 꼭 입력해주어야 함 */}
    </div>
  );
};

export default NaverOauth;
