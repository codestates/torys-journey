import React from "react";

const ReviewList = (data: any) => {
  return (
    <div>
      {`${data.userName}: ${data.comment}`}
      <br />
      {`평점 : ${data.rating}`}
    </div>
  );
};

export default ReviewList;
