import React, { useState, useEffect } from "react";
import MyPageMenu from "../component/MyPageMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dummyData from "./TESTTESTTEST";
import WritingList from "../component/WritingList";

const WritingManage = () => {
  const navigate = useNavigate();

  // const localStorageTokenCheck: string | null = localStorage.getItem("KEY");

  // const [writing, setWriting] = useState([]);
  // const callUserWriting = () => {
  //   if (localStorageTokenCheck) {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/user/restaurant`, {
  //         headers: {
  //           authorization: `Bearer ${localStorageTokenCheck}`,
  //         },
  //       })
  //       .then((res) => setWriting(res.data)) //get data state에 저장
  //       .catch(() => alert("작성하신 글을 불러오는 데 실패하였습니다."));
  //   } else {
  //     alert("로그인 후 이용해주세요");
  //     navigate("/");
  //   }
  // };

  // useEffect(callUserWriting, [callUserWriting]); // 정보 불러오기 useEffect
  console.log("랜더링확인");
  return (
    <div>
      <MyPageMenu />
      <div>작성글 리스트</div>
      {dummyData.map(
        //writing.map
        (el: {
          id: number;
          name: string;
          address: string;
          number: string;
          detailInfo: string;
          officeHours: string;
        }) => (
          <WritingList writingList={el} />
        )
      )}
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
