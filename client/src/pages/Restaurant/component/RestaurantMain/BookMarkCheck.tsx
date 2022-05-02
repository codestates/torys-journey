import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import store from "../../../../redux/Store";
import { BookMarkDiv } from "../../../../style/RestaurantInfo";

export type RootState = ReturnType<typeof store.getState>;

const BookMarkCheck = () => {
  const [clicked, setClicked] = useState(false);
  const params = useParams();
  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const check = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/restaurant/${params.id}/bookmark`,
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => setClicked(true))
      .catch((err) => err);
  }, []); //회원 북마크 등록 여부에 따라 화면 로딩 시 확인
  console.log("1");
  // const dasdfef => {

  // }

  const bookMark = () => {
    if (localStorageTokenCheck && clicked === false) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/restaurant/${params.id}/bookmark`,
          {},
          {
            headers: {
              authorization: `Bearer ${localStorageTokenCheck}`,
            },
          }
        )
        .then(() => check())
        .catch(() => {
          alert("북마크 등록이 실패하였습니다.");
        });
    } else if (localStorageTokenCheck && clicked === true) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/restaurant/${params.id}/bookmark`,
          {
            headers: {
              authorization: `Bearer ${localStorageTokenCheck}`,
            },
          }
        )
        .then(() => check())
        .catch(() => {
          alert("북마크 삭제가 실패하였습니다.");
        });
    } else if (!localStorageTokenCheck) {
      alert("로그인 후에 북마크에 등록하실 수 있습니다.");
    }
  }; // 북마크 등록 및 삭제 요청

  return (
    <BookMarkDiv>
      <FaStar
        onClick={() => bookMark()}
        color={clicked ? "gold" : "gray"}
        size="30"
      />
    </BookMarkDiv>
  );
};

export default BookMarkCheck;
