import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyPageMenu from "../component/MyPageMenu";
import MyReviewList from "../component/MyReviewList";
import { MyPageDiv, MyPageMenuDiv, WritingDiv } from "../style/Mypage";

const MyReview = () => {
  const navigate = useNavigate();

  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");

  const [review, setReview] = useState([]); //!레스토랑ID가 없음

  const callUserReview = () => {
    //본인이 쓴 리뷰 목록 서버에서 받아오기.
    if (localStorageTokenCheck) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/review`, {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        })
        .then((res) => setReview(res.data.data)) //get data state에 저장 //!레스토랑ID가 없음
        .catch(() => alert("작성하신 리뷰를 불러오는데 실패하였습니다."));
      // .catch(() => navigate("/"));
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/");
    }
  };

  useEffect(() => {
    callUserReview();
  }, []); // 정보 불러오기 useEffect

  const result = review
    .slice(0)
    .reverse()
    .map((num) => num); //기존 것 뒤집는 것

  return (
    <MyPageDiv>
      <MyPageMenuDiv>
        <MyPageMenu />
      </MyPageMenuDiv>
      {result.map(
        //!레스토랑ID가 없음
        (
          el: {
            reviewId: number;
            restaurantId: number;
            name: string;
            rating: number;
            comment: string;
          },
          key
        ) => (
          <MyReviewList reviewList={el} key={key} />
        )
      )}
    </MyPageDiv>
  );
};

export default MyReview;
