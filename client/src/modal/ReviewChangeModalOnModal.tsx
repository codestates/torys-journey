import React from "react";

type modalChangeProps = {
  modalChange: () => void;
  patchReview: () => void;
};

const ReviewChangeModalOnModal = ({
  modalChange,
  patchReview,
}: modalChangeProps) => {
  return (
    <div>
      <div>정말 수정하시겠습니까?</div>;
      <button onClick={patchReview}>확인</button>
      <button onClick={modalChange}>취소</button>
    </div>
  );
};

export default ReviewChangeModalOnModal;
