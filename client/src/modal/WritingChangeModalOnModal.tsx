import React from "react";
import {
  ModalBack,
  Header,
  ChangeModal,
  Content,
  ButtonDiv2,
} from "../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
type valueProps = {
  modalChange: () => void;
  patchWriting: () => void;
};

const WritingChangeModalOnModal = ({
  modalChange,
  patchWriting,
}: valueProps) => {
  return (
    <ModalBack>
      <ChangeModal>
        <Header>
          <div>Tory's-journey</div>
          <FontAwesomeIcon onClick={modalChange} icon={faTimes} />
        </Header>

        <Content>정말 수정하시겠습니까?</Content>
        <ButtonDiv2>
          <button onClick={patchWriting}>확인</button>
          <button onClick={modalChange}>취소</button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default WritingChangeModalOnModal;
