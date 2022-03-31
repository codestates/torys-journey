import React, { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import store from "../redux/Store";
import { useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;

const BookMarkCheck = () => {
  const [clicked, setClicked] = useState(false);
  const params = useParams<any>();
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  // //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const check = () => {
    setClicked(!clicked);
  };

  const bookMark = () => {
    if (clicked === false) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/restaurant/${params.id}/bookmark`,
          {},
          {
            headers: {
              "Content-Type": `application/json`,
              authorization: localStorageTokenCheck,
            },
          }
        )
        .then(() => check())
        .catch(() => {
          alert("즐겨찾기 등록이 실패하였습니다.");
        });
    } else {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/restaurant/${params.id}/bookmark`,
          {
            headers: {
              "Content-Type": `application/json`,
              authorization: localStorageTokenCheck,
            },
            withCredentials: true,
          }
        )
        .then(() => check())
        .catch(() => {
          alert("즐겨찾기 삭제가 실패하였습니다.");
        });
    }
  };

  return (
    <div>
      <FaStar onClick={() => bookMark()} color={clicked ? "gold" : "gray"} />
    </div>
  );
};

export default BookMarkCheck;
