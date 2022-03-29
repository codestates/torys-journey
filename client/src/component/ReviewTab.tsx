import React from "react";
import Star from "./Star";
const ReviewTab = () => {
  return (
    <div>
      <input type="text" />
      <Star />
      사진추가하기API
      <button>작성하기</button> {/*이거누르면 axios.post 요청 맞나? */}
    </div>
  );
};

export default ReviewTab;
