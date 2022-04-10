import React, { useState, useEffect } from "react";
import MyPageMenu from "../component/MyPageMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dummyData from "./TESTTESTTEST";
import WritingList from "../component/WritingList";
import { MyPageDiv, WritingDiv, Title } from "../style/Mypage";

const WritingManage = () => {
  const navigate = useNavigate();

  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");

  const [writing, setWriting] = useState([]);

  const callUserWriting = () => {
    //본인이 쓴 글 목록 서버에서 받아오기
    if (localStorageTokenCheck) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/restaurant`, {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        })
        .then((res) => setWriting(res.data.data)) //get data state에 저장
        .catch((err) => err);
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/");
    }
  };

  useEffect(() => {
    callUserWriting();
  }, []); // 정보 불러오기 useEffect
  return (
    <MyPageDiv>
      <MyPageMenu />
      <WritingDiv>
        <Title>등록한 식당</Title>
        {writing.map(
          (el: {
            id: number;
            name: string;
            photo: string[]; //photo로 바꾸기
            address: string;
            number: string;
            detailInfo: string;
            officeHours: string;
          }) => (
            <WritingList key={el.id} writingList={el} />
          )
        )}
      </WritingDiv>
    </MyPageDiv>
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
