import React, { useState } from "react";
import ReviewChange from "../modal/ReviewChange";
import {
  ReviewDiv,
  ReviewItemDiv,
  ReviewName,
  ReviewButton,
  ReviewContent,
} from "../style/Mypage";

type ReviewListProps = {
  //!레스토랑ID가 없음
  reviewList: {
    reviewId: number;
    restaurantId: number;
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
    <ReviewDiv>
      <ReviewItemDiv>
        <ReviewName>
          상호명 : {reviewList.name}
          평점 : {reviewList.rating}
        </ReviewName>
        <ReviewButton onClick={reviewChangeModal}>수정 / 삭제</ReviewButton>
        <ReviewContent>내용 : {reviewList.comment}</ReviewContent>
        {reviewChange ? (
          <ReviewChange
            key={reviewList.reviewId}
            ReviewChange={reviewList} //!레스토랑ID가 없음
            ReviewChangeModal={reviewChangeModal}
          />
        ) : (
          ""
        )}
      </ReviewItemDiv>
    </ReviewDiv>
  );
};

export default MyReviewList;
