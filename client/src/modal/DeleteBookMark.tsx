import React from "react";
import axios from "axios";
import store from "../redux/Store";
import { useSelector } from "react-redux";

type handleMadalDeleteBookMarkProps = {
  handleMadalDeleteBookMark: () => void;
  bookMarkData: any; //!서버 연결되면 수정
};

export type RootState = ReturnType<typeof store.getState>;

const DeleteBookMark = ({
  handleMadalDeleteBookMark,
  bookMarkData,
}: handleMadalDeleteBookMarkProps) => {
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const deleteBookMark = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/restaurant/${bookMarkData.id}/bookmark`,
        {
          headers: {
            "Content-Type": `application/json`,
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
          withCredentials: true,
        }
      )
      .then(() => alert("북마크 삭제를 성공하였습니다."))
      .then(handleMadalDeleteBookMark)
      .catch(() => alert("북마크 삭제를 실패하였습니다."));
  };

  return (
    <div>
      <div>북마크 삭제 모달</div>
      <button onClick={deleteBookMark}>예</button>
      <button onClick={handleMadalDeleteBookMark}>아니오</button>
    </div>
  );
};

export default DeleteBookMark;
