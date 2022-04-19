import React from "react";
import {
  ModalBack,
  Header,
  ChangeModal,
  Content,
  ButtonDiv2,
  Close,
  Button,
} from "../../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <Close>
            <FontAwesomeIcon onClick={modalChange} icon={faTimes} />
          </Close>
        </Header>

        <Content>정말 수정하시겠습니까?</Content>
        <ButtonDiv2>
          <Button onClick={patchReview}>확인</Button>
          <Button onClick={modalChange}>취소</Button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default ReviewChangeModalOnModal;
