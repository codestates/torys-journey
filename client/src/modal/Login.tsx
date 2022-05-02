import React, { useState } from "react";
import SignUp from "./SignUp";
import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../redux/Store";
import { loginCheck } from "../redux/Reducer";
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
  SignUpButton,
  OauthGoogleLogo,
} from "../style/Login";
import { Error } from "../style/SignUp";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.
type loginInfo = {
  email: string;
  password: string;
}; // tsc type

type loginRequestProps = {
  loginRequest: () => void;
};
const handleKakaoLogin = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/oauth/kakao`, {})
    .then(() => alert("카카오"));
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
        .then(() => window.location.reload())
        .catch(() => alert("비밀번호가 일치하지 않습니다.")); //비밀번호 틀렸을 때 구현해야함
    } else {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    }
  };

  return (
    <LoginModal>
      {signup === true ? (
        <SignUp handleModal={handleModal} />
      ) : (
        <InputModal>
          {/* <LogoDiv>
            <LoginLogo src={hiLogoo} />
          </LogoDiv> */}
          <LoginDiv>
            <CloseLoginDiv>
              <LoginTitle>Log-in</LoginTitle>
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
                <Error>{errorMessage}</Error>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
                <SignUpButton onClick={handleModal}>회원가입</SignUpButton>
              </form>
              {/* <OauthLoginDiv>
                <OauthGoogleLogo src={google}></OauthGoogleLogo>
                <OauthLogo src={naver}></OauthLogo>
                <OauthLogo src={kakao} onClick={handleKakaoLogin}></OauthLogo>
              </OauthLoginDiv> */}
            </LoginHeightDiv>
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
