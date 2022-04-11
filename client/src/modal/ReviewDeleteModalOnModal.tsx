import React from "react";
import {
  ModalBack,
  ChangeModal,
  Header,
  Content,
  ButtonDiv2,
  Close,
} from "../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type modalDeleteChange = {
  modalDeleteChange: () => void;
  deleteReview: () => void;
};

const ReviewDeleteModalOnModal = ({
  modalDeleteChange,
  deleteReview,
}: modalDeleteChange) => {
  return (
    <ModalBack>
      <ChangeModal>
        <Header>
          <div>Tory's-journey</div>
        <Close>
          <FontAwesomeIcon onClick={modalDeleteChange} icon={faTimes} /></Close>
          
        </Header>

        <Content>정말 삭제하시겠습니까?</Content>
        <ButtonDiv2>
          <button onClick={deleteReview}>확인</button>
          <button onClick={modalDeleteChange}>취소</button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default ReviewDeleteModalOnModal;
