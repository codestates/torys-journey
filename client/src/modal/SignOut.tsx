import axios from "axios";
import React from "react";
import { useState } from "react";

import store from "../redux/Store";
import { useNavigate } from "react-router";
import {
  ModalBack,
  Header,
  PostModal,
  CloseDiv,
  Delete,
  DeleteComment,
  DeleteButtonDiv,
  DeleteError,
  YesOrNo,

} from "../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <CloseDiv>
            <FontAwesomeIcon onClick={signOutRequest} icon={faTimes} />
          </CloseDiv>
        </Header>
        <Delete>정말 탈퇴하시겠습니까?</Delete>
        <DeleteComment>
          정말 탈퇴하실 것이라면 '탈퇴하겠습니다.'라고 적어주세요
        </DeleteComment>
        <DeleteButtonDiv>
          <input
            type="text"
            placeholder="탈퇴하겠습니다."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(e.target.value);
            }}
          />
 
          <YesOrNo onClick={DeleteAccount}>예</YesOrNo>
          <YesOrNo onClick={signOutRequest}>아니오</YesOrNo>{" "}
        </DeleteButtonDiv>
        <DeleteError>{error}</DeleteError>
      </PostModal>
    </ModalBack>
  );
};

export default SignOut;
