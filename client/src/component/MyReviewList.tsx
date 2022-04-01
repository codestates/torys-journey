import React, { useState } from "react";
import ReviewChange from "../modal/ReviewChange";
type ReviewListProps = {
  //!레스토랑ID가 없음
  reviewList: {
    reviewId: number;
    name: string;
    rating: number;
    comment: string;
  };
};

const MyReviewList = ({ reviewList }: ReviewListProps) => {
  //!레스토랑ID가 없음
  const [reviewChange, setReviewChange] = useState(false);

  const reviewChangeModal = () => {
    setReviewChange(!reviewChange);
  };

  //MyReview에서 본인이 쓴 글을 전부 받아 하나씩 컴포넌트에서 만들어서 WritingChange(글 쓴 것 수정 모달) 띄우기.
  //수정 버튼을 눌렀을 때 하나씩 띄우려면 컴포넌트로 전달해야 함.

  return (
    <div>
      <div>
        {reviewList.name}
        {reviewList.rating}
        {reviewList.comment}
        <button onClick={reviewChangeModal}>수정 / 삭제</button>

        {reviewChange ? (
          <ReviewChange
            key={reviewList.reviewId}
            ReviewChange={reviewList} //!레스토랑ID가 없음
            ReviewChangeModal={reviewChangeModal}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyReviewList;
