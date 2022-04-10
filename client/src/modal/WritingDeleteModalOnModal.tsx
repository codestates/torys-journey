import React from "react";
import {
  ModalBack,
  ChangeModal,
  Header,
  Content,
  ButtonDiv2,
  ButtonDelete,
 
} from "../style/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
type valueDeleteProps = {
  modalDeleteChange: () => void;
  deleteWriting: () => void;
};

const WritingDeleteModalOnModal = ({
  modalDeleteChange,
  deleteWriting,
}: valueDeleteProps) => {
  return (
    <ModalBack>
      <ChangeModal>
        <Header>
          <div>Tory's-journey</div>
         
          <FontAwesomeIcon onClick={modalDeleteChange} icon={faTimes} />
          
        </Header>

        <Content>정말 삭제하시겠습니까?</Content>
        <ButtonDiv2>
          <ButtonDelete onClick={deleteWriting}>확인</ButtonDelete>
          <button onClick={modalDeleteChange}>취소</button>
        </ButtonDiv2>
      </ChangeModal>
    </ModalBack>
  );
};

export default WritingDeleteModalOnModal;
