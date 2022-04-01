import React from "react";

type modalDeleteChange = {
  modalDeleteChange: () => void;
  deleteReview: () => void;
};

const ReviewDeleteModalOnModal = ({
  modalDeleteChange,
  deleteReview,
}: modalDeleteChange) => {
  return (
    <div>
      <div>정말 삭제하시겠습니까?</div>;
      <button onClick={deleteReview}>확인</button>
      <button onClick={modalDeleteChange}>취소</button>
    </div>
  );
};

export default ReviewDeleteModalOnModal;
