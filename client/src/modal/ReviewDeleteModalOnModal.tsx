import React from "react";
import {
  ModalBack,
  ChangeModal,
  Header,
  Content,
  ButtonDiv2,
} from "../style/Modal";

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
          <div onClick={modalDeleteChange}>X</div>
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
