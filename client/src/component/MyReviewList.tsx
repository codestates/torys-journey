import ReviewChange from "../modal/ReviewChange";
import React, { useState } from "react";
import {

  ReviewItemDiv,
  ReviewName,
  ReviewButton,
  ReviewContent,
  ReviewContainer,
  ReviewButton2
} from "../style/Mypage";
import { FaStar } from "react-icons/fa";
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
    <ReviewItemDiv>
    
      <ReviewName><div>{reviewList.name}</div>
      <div>
          {reviewList.rating === 1 ? (
            <FaStar color="gold" />
          ) : reviewList.rating === 2 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : reviewList.rating === 3 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : reviewList.rating === 4 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : reviewList.rating === 5 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : (
            ""
          )}
        </div></ReviewName>
    
      <ReviewButton2><ReviewContent>{reviewList.comment}</ReviewContent>
      {reviewChange ? (
        <ReviewChange
          key={reviewList.reviewId}
          ReviewChange={reviewList} //!레스토랑ID가 없음
          ReviewChangeModal={reviewChangeModal}
        />
      ) : (
        ""
      )} <ReviewButton onClick={reviewChangeModal}>수정/삭제</ReviewButton></ReviewButton2>
    </ReviewItemDiv>
  );
};

export default MyReviewList;
