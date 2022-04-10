import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SignUpModal,
  FormModal,
  SignUpTitle,
  SignUpInput,
  SignupButton,
  Error
} from "../style/SignUp";

type handleModalProps = {
  handleModal: () => void;
};

const SignUp = ({ handleModal }: handleModalProps) => {
  console.log(handleModal);
  const [userinfo, setUserinfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordcheck: "",
  });
  const [error, setError] = useState<boolean>(false);
  // const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordValidError, setPasswordValidError] = useState(""); //비밀번호 유효성검사용
  const [passwordCorrect, setPasswordCorrect] = useState(false); //비밀번호 유효성 검사 통과

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
        setPasswordCorrect(false);
      } else {
        setPasswordValidError(`안전한 비밀번호입니다!`);
        setPasswordCorrect(true);
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
    } else if (
      userinfo.password === userinfo.passwordcheck &&
      passwordCorrect === true
    ) {
      //비밀번호 일치하면 비밀번호 에러 메세지 없음
      setError(false); //모든항목 필수입니다 도 없음
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/signup`, {
          email: userinfo.email,
          password: userinfo.password,
          name: userinfo.name,
        })
        .then(handleModal) // test
        .then(() => setPasswordCorrect(false))
        .catch(() => alert("비밀번호가 맞지 않습니다."));
    } else {
      alert("비밀번호가 맞지 않습니다.");
    }
  };
  return (
    <SignUpModal>
      <FormModal onSubmit={(e: any) => e.preventDefault()}>
        <SignUpTitle>회원가입</SignUpTitle>
        <h4>E-mail</h4>
        <SignUpInput
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={handleInputValue("email")}
        />

        <h4>Name</h4>
        <SignUpInput
          type="name"
          placeholder="이름을 입력하세요"
          onChange={handleInputValue("name")}
        />

        <h4>Password</h4>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputValue("password")}
        />

        {userinfo.password.length > 0 ? passwordValidError : ""}
        <h4>Confirm Password</h4>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 다시 한번 입력하세요"
          onChange={handleInputPasswordCheckValue("passwordcheck")}
        />

        {userinfo.password.length > 0 && userinfo.passwordcheck.length > 0
          ? userinfo.password && userinfo.password !== userinfo.passwordcheck
            ? "비밀번호가 일치하지 않습니다."
            : "비밀번호가 일치합니다."
          : ""}

        <Error>{error ? "모든 항목을 입력하세요" : ""}</Error>
        <SignupButton onClick={handleSignUp}>회원가입하기</SignupButton>
      </FormModal>
    </SignUpModal>
  );
};

export default SignUp;
