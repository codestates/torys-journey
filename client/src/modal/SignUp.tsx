import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import {
  SignUpModal,
  FormModal,
  SignUpTitle,
  SignUpInput,
} from "../style/SignUp";
=======

>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
const SignUp = () => {
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordcheck: "",
  });
  const [error, setError] = useState<boolean>(false);
  // const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordValidError, setPasswordValidError] = useState(""); //비밀번호 유효성검사용

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserinfo({ ...userinfo, [key]: e.target.value });
      // console.log(e.target.value);
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; //숫자+영문자+특수문자 조합으로 8자리 이상
      let password: string = e.target.value;
      if (!passwordRegex.test(password)) {
        setPasswordValidError(
          `숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요! 사용 가능한 특수문자는 !@#$%^*+=- 입니다.`
        );
      } else {
        setPasswordValidError(`안전한 비밀번호입니다!`);
      }
    };

  const handleInputPasswordCheckValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserinfo({ ...userinfo, [key]: e.target.value });
    };

  const handleSignUp = () => {
    let ok =
      userinfo.email &&
      userinfo.name &&
      userinfo.password &&
      userinfo.passwordcheck;

    if (!ok) {
      setError(true); // 다들어오지 않으면 모든항목필수입니다 에러메세지
    } else if (userinfo.password !== userinfo.passwordcheck) {
      //비밀번호 일치하지 않으면 비밀번호 일치하지않는다고 메세지

      setError(false); //모든항목필수입니다는 없어짐
    } else {
      //비밀번호 일치하면 비밀번호 에러 메세지 없음
      setError(false); //모든항목 필수입니다 도 없음
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          {
            email: userinfo.email,
            password: userinfo.password,
            name: userinfo.name,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => navigate("/"));
    }
  };
  return (
<<<<<<< HEAD
    <SignUpModal>
      <FormModal onSubmit={(e: any) => e.preventDefault()}>
        {/* <FormModal
        onSubmit={(e: { preventDefault: () => any }) => e.preventDefault()}
      > */}
        <SignUpTitle>회원가입</SignUpTitle>
        <h4>E-mail</h4>
        {/* <label htmlFor="email"> 이메일 </label> */}
        <SignUpInput
=======
    <div>
      회원가입
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email"> 이메일 </label>
        <input
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={handleInputValue("email")}
        />
<<<<<<< HEAD

        <h4>Name</h4>
        {/* <label htmlFor="name"> 이름 </label> */}
        <SignUpInput
=======
        <br />
        <label htmlFor="name"> 이름 </label>
        <input
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
          type="name"
          placeholder="이름를 입력하세요"
          onChange={handleInputValue("name")}
        />
<<<<<<< HEAD

        <h4>Password</h4>
        {/* <label htmlFor="password"> 비밀번호 </label> */}
        <SignUpInput
=======
        <br />
        <label htmlFor="password"> 비밀번호 </label>
        <input
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputValue("password")}
        />

        {userinfo.password.length > 0 ? passwordValidError : ""}
<<<<<<< HEAD
        <h4>Confirm Password</h4>
        {/* <label htmlFor="passwordcheck"> 비밀번호 확인 </label> */}
        <SignUpInput
=======
        <br />
        <label htmlFor="passwordcheck"> 비밀번호 확인 </label>
        <input
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
          type="password"
          placeholder="비밀번호를 다시 한번 입력하세요"
          onChange={handleInputPasswordCheckValue("passwordcheck")}
        />

<<<<<<< HEAD
=======
        <br />
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
        {userinfo.password.length > 0 && userinfo.passwordcheck.length > 0
          ? userinfo.password && userinfo.password !== userinfo.passwordcheck
            ? "비밀번호가 일치하지 않습니다."
            : "비밀번호가 일치합니다."
          : ""}

        <button onClick={handleSignUp}>회원가입하기</button>
        <div>{error ? "모든 항목을 입력하세요" : ""}</div>
<<<<<<< HEAD
      </FormModal>
    </SignUpModal>
=======
      </form>
    </div>
>>>>>>> 369cbdda4cbaae394d84b31aaba8a7862774b58b
  );
};

export default SignUp;
