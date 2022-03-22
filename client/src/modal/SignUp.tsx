import React, { useState } from "react";

const SignUp = () => {
  const [userinfo, setUserinfo] = useState({
    email: "",
    username: "",
    password: "",
    passwordcheck: "",
  });

  const [passwordValidError, setPasswordValidError] = useState(""); //비밀번호 유효성검사용
  const handleInputValue =
    (key: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserinfo({ ...userinfo, [key]: e.target.value });
      console.log(e.target.value);
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; //숫자+영문자+특수문자 조합으로 8자리 이상
      let password = e.target.value;
      if (!passwordRegex.test(password)) {
        setPasswordValidError(
          `숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요! 사용 가능한 특수문자는 !@#$%^*+=- 입니다.`
        );
      } else {
        setPasswordValidError(`안전한 비밀번호입니다!`);
      }
    };
  const [error, setError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSignUp = () => {
    let ok =
      userinfo.email &&
      userinfo.username &&
      userinfo.password &&
      userinfo.passwordcheck;

    if (!ok) {
      setError(true); // 다들어오지 않을면 모든항목필수입니다 에러메세지
    } else if (userinfo.password !== userinfo.passwordcheck) {
      //비밀번호 일치하지 않으면 비밀번호 일치하지않는다고 메세지
      setPasswordError(true);
      setError(false); //모든항목필수입니다는 없어짐
    } else {
      setPasswordError(false); //비밀번호 일치하면 비밀번호 에러 메세지 없음
      setError(false); //모든항목 필수입니다 도 없음 
    }
  };
  return (
    <div>
      회원가입
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email"> 이메일 </label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={handleInputValue("email")}
        />
        <br />
        <label htmlFor="username"> 이름 </label>
        <input
          type="username"
          placeholder="이름를 입력하세요"
          onChange={handleInputValue("username")}
        />
        <br />
        <label htmlFor="password"> 비밀번호 </label>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputValue("password")}
        />
     
        {userinfo.password&& !userinfo.passwordcheck ? passwordValidError: ""}
        <br />
        <label htmlFor="passwordcheck"> 비밀번호 확인 </label>
        <input
          type="password"
          placeholder="비밀번호를 다시 한번 입력하세요"
          onChange={handleInputValue("passwordcheck")}
        />

        <br />
        {passwordError ? "비밀번호가 일치하지 않습니다." : ""}
        
        <button onClick={handleSignUp}>회원가입하기</button>
        <div>{error ? "모든 항목을 입력하세요" : ""}</div>
      </form>
    </div>
  );
};

export default SignUp;
