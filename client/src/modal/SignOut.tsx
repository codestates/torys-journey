import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import { useNavigate } from "react-router";
import {
  ModalBack,
  PostModal,
  Header,
  Close,
  ButtonDiv,
  ButtonDiv2,
  Button,
  ButtonDiv3,
  Title,
  DeleteContent,
  DeleteError,
  DelteInput,
} from "../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Error } from "../style/SignUp";
export type RootState = ReturnType<typeof store.getState>;
const SignOut: React.FC<any> = ({ signOutRequest }) => {
  //가라임, 수정해야함(type)
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck = localStorage.getItem("KEY");
  const DeleteAccount = () => {
    if (message === "탈퇴하겠습니다.") {
      setError("확인되었습니다.");
      axios
        .delete(`${process.env.REACT_APP_API_URL}/user`, {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        })
        .then(() => {
          localStorage.removeItem("KEY");
        }) //로컬스토리지에 있는 토큰 삭제
        .then(() => {
          alert("탈퇴되었습니다.");
        })
        .then(() => {
          navigate("/");
        });
    } else {
      setError("다시 적어주세요");
    }
  };
  // localStorage.removeItem()
  return (
    <ModalBack>
      <PostModal>
        <Header>
          <div>Tory's-journey</div>
          <Close>
            <FontAwesomeIcon onClick={signOutRequest} icon={faTimes} />
          </Close>
        </Header>
        <Title>정말 탈퇴하시겠습니까?</Title>
        <DeleteContent>
          정말 탈퇴하실 것이라면 '탈퇴하겠습니다.'라고 적어주세요
        </DeleteContent>
        <DelteInput
          type="text"
          placeholder="탈퇴하겠습니다."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value);
          }}
        />{" "}
        <DeleteError>{error}</DeleteError>
        <ButtonDiv3>
          <Button onClick={DeleteAccount}>예</Button>
          <Button onClick={signOutRequest}>아니오</Button>
        </ButtonDiv3>
      </PostModal>
    </ModalBack>
  );
};

export default SignOut;
