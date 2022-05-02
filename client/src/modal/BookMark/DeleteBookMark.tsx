import React, { useState } from "react";
import axios from "axios";
import store from "../../redux/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  ModalBack,
  ChangeModal,
  Header,
  Content,
  ButtonDiv2,
} from "../../style/Modal";

type handleMadalDeleteBookMarkProps = {
  handleModalDeleteBookMark: () => void;
  bookMarkData: {
    id: string;
    photo: [string];
    name: string;
  }; //!서버 연결되면 수정
};

export type RootState = ReturnType<typeof store.getState>;

const DeleteBookMark = ({
  handleModalDeleteBookMark,
  bookMarkData,
}: handleMadalDeleteBookMarkProps) => {
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  const localStorageTokenCheck: any = localStorage.getItem("KEY");
  console.log("22222", bookMarkData);
  const deleteBookMark = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/restaurant/${bookMarkData.id}/bookmark`,
        {
          //레스토랑ID로 수정
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("북마크 삭제를 성공하였습니다."))
      .then(handleModalDeleteBookMark)
      .then(() => window.location.reload()) //! 블로그(리랜더링)
      .catch(() => alert("북마크 삭제를 실패하였습니다."));
  };

  return (
    <ModalBack>
      <ChangeModal>
        <Header>
          <div>Tory's-journey</div>

          <FontAwesomeIcon onClick={handleModalDeleteBookMark} icon={faTimes} />
        </Header>

        <Content>정말 삭제하시겠습니까?</Content>
        <ButtonDiv2>
          <button onClick={deleteBookMark}>확인</button>
          <button onClick={handleModalDeleteBookMark}>취소</button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default DeleteBookMark;
