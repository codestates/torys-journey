import React from "react";
import { ReviewDiv } from "../style/RestaurantInfo";
import { FaStar } from "react-icons/fa";

const ReviewList = ({ data }: any) => {
  return (
    <ReviewDiv>
      <div>{`작성자 : ${data.userName}`}</div>
      <div>{`내용 : ${data.comment}`}</div>
      <div>
        {" "}
        {data.rating === 1 ? (
          <FaStar color="gold" size="25" />
        ) : data.rating === 2 ? (
          <div>
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
          </div>
        ) : data.rating === 3 ? (
          <div>
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
          </div>
        ) : data.rating === 4 ? (
          <div>
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
          </div>
        ) : data.rating === 5 ? (
          <div>
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
            <FaStar color="gold" size="25" />
          </div>
        ) : (
          ""
        )}
      </div>
    </ReviewDiv>
  );
};

export default ReviewList;
