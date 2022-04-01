import React from "react";

type valueProps = {
  modalChange: () => void;
  patchWriting: () => void;
};

const WritingChangeModalOnModal = ({
  modalChange,
  patchWriting,
}: valueProps) => {
  return (
    <div>
      <button onClick={patchWriting}>확인</button>
      <button onClick={modalChange}>취소</button>
    </div>
  );
};

export default WritingChangeModalOnModal;
