import React, { useState } from "react";
import MyPageMenu from "../component/MyPageMenu";
import SignOut from "../modal/SignOut";
import axios from "axios";
import store from "../redux/Store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  MyPageDiv,
  MyPageInfo,
  MypageInput,
  MyPageMenuDiv,
} from "../style/Mypage";
import {
  Title,
  Input,
  InputTag,
  Button,
  MyInfoInput,
  ButtonContainer,
  ErrorMessage,
} from "../style/MyInfo";
import { ButtonDiv } from "../style/RestaurantList";
import styled from "styled-components";
export type RootState = ReturnType<typeof store.getState>;

const MyInfo = () => {
  const navigate = useNavigate();
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck = localStorage.getItem("KEY");

  const [requestSignOut, setRequestSignOut] = useState<boolean>(false); // 모달 useState

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  }); //비밀번호 입력 state

  const [passwordValid, setPasswordValid] = useState(false);
  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(""); //비밀번호 검사 useState
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const signOutRequest = () => {
    setRequestSignOut(!requestSignOut); //탈퇴 요청 시 모달 띄우기
  };

  const handleInputValue =
    (target: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordInfo({ ...passwordInfo, [target]: e.target.value });
      if (target === "newPassword") {
        const passwordRegex =
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; //숫자+영문자+특수문자 조합으로 8자리 이상 사용 정규표현식
        let passwordCurrent = e.target.value;
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordMessage(`숫자+영문자+특수문자 조합으로
          8자리 이상 입력해주세요.
          사용 가능한 특수문자는 !@#$%^*+=- 입니다.`);
          setPasswordValid(false);
        } else if (
          passwordRegex.test(passwordCurrent) &&
          passwordCurrent === passwordInfo.oldPassword
        ) {
          setPasswordMessage(
            "현재 비밀번호와 일치합니다. 다른 비밀번호를 입력해주세요."
          );
          setPasswordValid(false);
        } else {
          setPasswordMessage("안전한 비밀번호입니다");
          setPasswordValid(true);
        }
      } else if (target === "newPasswordConfirm") {
        if (e.target.value === passwordInfo.newPassword) {
          setPasswordConfirmMessage("비밀번호를 똑같이 입력했습니다");
          setNewPasswordValid(true);
        } else {
          setPasswordConfirmMessage("비밀번호가 틀립니다. 다시 확인해주세요.");
          setNewPasswordValid(false);
        }
      }
    };

  const changePassword = () => {
    //비밀번호 유효성 검사 통과 확인
    if (!passwordValid || !newPasswordValid) return;
    axios //비밀번호 변경 시 서버에 요청
      .patch(
        `${process.env.REACT_APP_API_URL}/user`,
        {
          oldPassword: passwordInfo.oldPassword,
          newPassword: passwordInfo.newPassword,
        },
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => {
        alert("비밀번호 변경이 성공하였습니다.");
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("기존 비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <MyPageDiv>
      <MyPageMenu />

      <MyPageInfo>
        <Title>정보수정</Title>
        <InputTag>
          <Input>
            <h4>현재 비밀번호</h4>
            <MyInfoInput
              type="password"
              placeholder="현재 비밀번호를 입력하세요"
              onChange={handleInputValue("oldPassword")}
            />
            <h4>새로운 비밀번호</h4>

            <MyInfoInput
              type="password"
              placeholder="새로운 비밀번호를 입력하세요"
              onChange={handleInputValue("newPassword")}
            />
            <ErrorMessage>
              {passwordInfo.newPassword.length > 0 ? passwordMessage : ""}
            </ErrorMessage>
            <h4>새로운 비밀번호 확인</h4>
            <MyInfoInput
              type="password"
              placeholder="새로운 비밀번호를 다시 입력하세요"
              onChange={handleInputValue("newPasswordConfirm")}
            />
            <ErrorMessage>
              {passwordInfo.newPasswordConfirm.length > 0
                ? passwordConfirmMessage
                : ""}
            </ErrorMessage>
            <ButtonContainer>
              <Button onClick={changePassword}>확인</Button>
              <Button onClick={signOutRequest}>탈퇴하기</Button>
            </ButtonContainer>
            {requestSignOut ? <SignOut signOutRequest={signOutRequest} /> : ""}
            {/*가라임, 수정해야함*/}
          </Input>
        </InputTag>
      </MyPageInfo>
    </MyPageDiv>
  );
};

export default MyInfo;
