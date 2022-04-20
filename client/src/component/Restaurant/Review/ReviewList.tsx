import React from "react";
import { Div, ReviewDiv, Title } from "../../../style/RestaurantInfo";
import { FaStar } from "react-icons/fa";

const ReviewList = ({ data }: any) => {
  return (
    <ReviewDiv>
      <Div>
        <Title>작성자 :</Title>
        {data.userName}
      </Div>
      <Div>
        <Title>내용 :</Title>
        {data.comment}
      </Div>
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
