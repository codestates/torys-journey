import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/Store";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.
type loginInfo = {
  email: string;
  password: string;
}; // tsc type

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signup, setSignup] = useState<boolean>(false); // 상태 변화에 따른 signup modal창 띄우는 state
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    // 로그인을 위한 input값 저장 state
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  // console.log(accessToken);
  const handleMadal = () => {
    //signup 띄우기 함수
    setSignup(true);
  };

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };

  const localId = useSelector((localId: RootState) => localId.Reducer.id);
  //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck = localStorage.getItem(localId);
  //로컬스토리지의 토큰을 받아온 것. localstorage에 있는 키값과 일치하는 것을 보내면 그 키의 값인 토큰을 받아오는 것이다.
  useEffect(() => {
    if (localStorageTokenCheck) {
      dispatch({ type: "login", payload: { isLogin: true } });
    }
  }, [dispatch, localStorageTokenCheck]); // useEffect 초기값 정하는 것인데 헷갈림.
  //! 여기까지 토큰 저장하고 받아오는 것. 동길이한테 id 같이 보내달라고 하기.
  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      let { email, password } = loginInfo;
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        ) //로그인 요청
        .then((res) => {
          if (res.data.data.id && res.data.data.accessToken) {
            dispatch({
              type: "accessToken",
              payload: {
                id: res.data.data.id,
                accessToken: res.data.data.accessToken,
              },
            }); //! 토큰과 id를 redux state에 저장하는 것.(id 나중에 사용)
            localStorage.setItem(res.data.data.id, res.data.data.accessToken);
          }
          //로컬스토리지에 저장하는 법. 첫 번째 인자가 Key, 두 번째 인자가 토큰
        })
        // 서버로부터 토큰 받는 부분
        .then(() => navigate("/"))
        .catch(() => alert("비밀번호가 일치하지 않습니다.")); //비밀번호 틀렸을 때 구현해야함
    } else {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    }
  };

  return (
    <div>
      {signup === true ? (
        <SignUp />
      ) : (
        <div>
          <form>
            <input
              type="email"
              placeholder="E-mail을 입력하세요"
              onChange={handleInputValue("email")}
            />
            <input
              type="password"
              placeholder="password를 입력하세요"
              onChange={handleInputValue("password")}
            />
          </form>
          <button onClick={handleLogin}>로그인</button>
          <button onClick={handleMadal}>회원가입</button>
          <div>{errorMessage}</div>
        </div>
      )}
    </div>
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
