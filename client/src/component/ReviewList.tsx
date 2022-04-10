import React from "react";
import { ReviewDiv } from "../style/RestaurantInfo";

const ReviewList = ({ data }: any) => {
  return (
    <ReviewDiv>
      <div>{`작성자 : ${data.userName}`}</div>
      <div>{`내용 : ${data.comment}`}</div>
      <div>{`평점 : ${data.rating}`}</div>
    </ReviewDiv>
  );
};

export default ReviewList;
