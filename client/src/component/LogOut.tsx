import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import store from "../redux/Store";

export type RootState = ReturnType<typeof store.getState>;

const LogOut = () => {
  const localId = useSelector((localId: RootState) => localId.Reducer.id);
  //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck: any = localStorage.getItem(localId);

  const handleLogOut = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/logout`,
        {},
        {
          headers: {
            "Content-Type": `application/json`,
            authorization: localStorageTokenCheck,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        localStorage.clear();
      })
      .catch(() => alert("로그아웃에 실패하였습니다."));
  };

  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default LogOut;
