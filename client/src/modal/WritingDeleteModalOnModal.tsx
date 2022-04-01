import React from "react";

type valueDeleteProps = {
  modalDeleteChange: () => void;
  deleteWriting: () => void;
};

const WritingDeleteModalOnModal = ({
  modalDeleteChange,
  deleteWriting,
}: valueDeleteProps) => {
  return (
    <div>
      <div>정말 삭제하시겠습니까?</div>
      <button onClick={deleteWriting}>확인</button>
      <button onClick={modalDeleteChange}>취소</button>
    </div>
  );
};

export default WritingDeleteModalOnModal;
