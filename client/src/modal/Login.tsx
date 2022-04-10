import React, { useState } from "react";
import SignUp from "./SignUp";
import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../redux/Store";
import { loginCheck } from "../redux/Reducer";
import NaverOauth from "../Oauth/NaverOauth";
import KakaoOauth from "../Oauth/KakaoOauth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  LoginModal,
  InputModal,
  IdInput,
  LoginButton,
  LoginTitle,
  OauthLogo,
  CloseButtonDiv,
  OauthLoginDiv,
  CloseLoginDiv,
  LoginHeightDiv,
  LoginDiv,
  LogoDiv,
  LoginLogo,
  ButtonDiv,
  Error,
} from "../style/Login";
import google from "../style/OauthButton/google1.png";
import naver from "../style/OauthButton/naver.png";
import kakao from "../style/OauthButton/kakao.png";
import hiLogoo from "../style/OauthButton/hiLogo.jpeg";

// Client ID: 7IxLOwtePiMM2_x0nQgw
// Client Secret : OKVYfUlNMF

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.
type loginInfo = {
  email: string;
  password: string;
}; // tsc type

type loginRequestProps = {
  loginRequest: () => void;
};

const Login = ({ loginRequest }: loginRequestProps) => {
  const dispatch = useDispatch();

  const [signup, setSignup] = useState<boolean>(false); // 상태 변화에 따른 signup modal창 띄우는 state
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    // 로그인을 위한 input값 저장 state
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  // console.log(accessToken);
  const handleModal = () => {
    //signup 띄우기 함수
    setSignup(!signup);
  };

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };

  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      let { email, password } = loginInfo;
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, {
          email,
          password,
        }) //로그인 요청
        .then((res) => {
          if (res.data.data.userId && res.data.data.accessToken) {
            localStorage.setItem("KEY", res.data.data.accessToken);
            dispatch({
              type: "accessToken",
              payload: {
                id: res.data.data.userId,
                accessToken: res.data.data.accessToken,
              },
            }); //! 토큰과 id를 redux state에 저장하는 것.(id 나중에 사용)
          }
          //로컬스토리지에 저장하는 법. 첫 번째 인자가 Key, 두 번째 인자가 토큰
        })
        .then(() => {
          dispatch(loginCheck());
        })
        // 서버로부터 토큰 받는 부분
        .then(loginRequest) //로그인 모달창 띄우는 state 변경 함수
        .catch(() => alert("비밀번호가 일치하지 않습니다.")); //비밀번호 틀렸을 때 구현해야함
    } else {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    }
  };

const handleGoogleLogin=()=>{
  axios
  .get(`${process.env.REACT_APP_API_URL}/oauth/google`,{})
  .then(()=>alert("구글 로그인 "))
  
}

const handleKakaoLogin=()=>{
  axios
  .get(`${process.env.REACT_APP_API_URL}/oauth/kakao`,{})
  .then(()=>alert("카카오 로그인 "))
  
}
const handleNaverLogin=()=>{
  axios
  .get(`${process.env.REACT_APP_API_URL}/oauth/naver`,{})
  .then(()=>alert("네이버 로그인 "))
  
}

  return (
    <LoginModal>
      {signup === true ? (
        <SignUp handleModal={handleModal} />
      ) : (
        <InputModal>
          <LogoDiv>
            <LoginLogo src={hiLogoo} />
          </LogoDiv>
          <LoginDiv>
            <CloseLoginDiv>
              <LoginTitle>Login</LoginTitle>
              <CloseButtonDiv>
                {/* <CloseButton> */}
                <FontAwesomeIcon onClick={loginRequest} icon={faTimes} />
                {/* </CloseButton> */}
              </CloseButtonDiv>
            </CloseLoginDiv>
            <LoginHeightDiv>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <IdInput
                    type="email"
                    placeholder="E-mail을 입력하세요"
                    onChange={handleInputValue("email")}
                  />
                </div>
                <div>
                  <IdInput
                    type="password"
                    placeholder="password를 입력하세요"
                    onChange={handleInputValue("password")}
                  />
                </div>
              </form>
              <Error>{errorMessage}</Error>
              <ButtonDiv>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
                <LoginButton onClick={handleModal}>회원가입</LoginButton>
              </ButtonDiv>
              <OauthLoginDiv>
                <OauthLogo src={google} onClick={handleGoogleLogin}></OauthLogo>
                <OauthLogo src={naver} onClick={handleNaverLogin}></OauthLogo>
                <OauthLogo src={kakao} onClick={handleKakaoLogin}></OauthLogo>
              </OauthLoginDiv>{" "}
            </LoginHeightDiv>{" "}
          </LoginDiv>
        </InputModal>
      )}
      {/* <div>
        <NaverOauth />
        <KakaoOauth />
      </div> */}
    </LoginModal>
  );
};

export default Login;

// const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const 김소라 = e.target.value;
//   dispatch({ type: "accessToken", payload: 김소라 });
// };
// const 홍왕열 = useSelector((김김: RootState) =>
//   console.log(김김.Reducer.accessToken, "1111111")
// );
