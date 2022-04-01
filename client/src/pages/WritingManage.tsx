import React from "react";
import MyPageMenu from "../component/MyPageMenu";
import store from "../redux/Store";
import { useSelector } from "react-redux";
import axios from "axios";

export type RootState = ReturnType<typeof store.getState>;

const WritingManage = () => {
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  // const localStorageTokenCheck: any = localStorage.getItem("KEY");
  // const [writing, setWriting] = useState<any>([]); //북마크 정보 받아오기

  // const callUserWriting = () => {
  //   if (localStorageTokenCheck) {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/user/restaurant`, {
  //         headers: {
  //           "Content-Type": `application/json`,
  //           authorization: `Bearer ${localStorageTokenCheck}`,
  //         },
  //         withCredentials: true,
  //       })
  //       .then((res) => setBookMarkData(res.data)) //get data state에 저장
  //       .catch(() => alert("북마크 불러오기를 실패하였습니다."));
  //   } else {
  //     alert("로그인 후 이용해주세요");
  //     navigate("/");
  //   }
  // };

  return (
    <div>
      <MyPageMenu />
      <div>작성글 관리</div>
    </div>
  );
};

export default WritingManage;

// data: [
//   {
//       id:1,
//       name: "만두집",
//       photo: [
//           "https://picture.com/23r4234e",
//           "https://picture.com/232we312",
//           ...
//           ]
//       address: "경기 부천시 상동로",
//       number: "010-2323-1515",
//       detailInfo: "주차 가능",
//       officeHours: "11:00 - 21:00"
//   }, {}, {}, {}
