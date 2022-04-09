import React from "react";
import {
  ModalBack,
  Header,
  ChangeModal,
  Content,
  ButtonDiv2,
} from "../style/Modal";

type modalChangeProps = {
  modalChange: () => void;
  patchReview: () => void;
};

const ReviewChangeModalOnModal = ({
  modalChange,
  patchReview,
}: modalChangeProps) => {
  return (
    <ModalBack>
      <ChangeModal>
        <Header>
          <div>Tory's-journey</div>
          <div onClick={modalChange}>X</div>
        </Header>

        <Content>정말 수정하시겠습니까?</Content>
        <ButtonDiv2>
          <button onClick={patchReview}>확인</button>
          <button onClick={modalChange}>취소</button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default ReviewChangeModalOnModal;
