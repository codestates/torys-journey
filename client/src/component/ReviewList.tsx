import React, { useState } from "react";
// import { ReviewDiv } from "../style/RestaurantInfo";
import { List, ReviewListDiv, Title } from "../style/Review";
import { FaStar } from "react-icons/fa";

const ReviewList = ({ data }: any) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

 

  return (
    <ReviewListDiv>
      <List>
        <Title>작성자 :</Title>
        <div>{data.userName}</div>
      </List>
      <List>
        {" "}
        <Title>리뷰 :</Title>
        <div>{data.comment}</div>
      </List>
      <List>
        {" "}
        <Title>평점 :</Title>
        <div>
          {data.rating === 1 ? (
            <FaStar color="gold" />
          ) : data.rating === 2 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : data.rating === 3 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : data.rating === 4 ? (
            <div>
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          ) : data.rating === 5 ? (
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
        </div>
      </List>
    </ReviewListDiv>
  );
};

export default ReviewList;
