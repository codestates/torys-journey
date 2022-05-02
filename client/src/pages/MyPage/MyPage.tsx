import axios from "axios";
import React, { useState, useEffect } from "react";
import MyPageMenu from "../../component/MyPage/MyPageMenu";
import { useNavigate } from "react-router-dom";
import DeleteMiddleBookMark from "../../component/MyPage/MyBookMark";
import { MyPageDiv, BookMarkListDiv, Title } from "../../style/Mypage";

const MyPage = () => {
  const navigate = useNavigate();

  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const [bookMarkData, setBookMarkData] = useState<any>([]); //북마크 정보 받아오기

  const callUserBookMark = () => {
    if (localStorageTokenCheck) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/bookmark`, {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        })
        .then((res) => {
          // console.log(res);
          setBookMarkData(res.data.data);
        }) //get data state에 저장
        .catch(() => alert("북마크 불러오기를 실패하였습니다."));
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/");
    }
  };

  useEffect(() => {
    callUserBookMark();
  }, []); // 정보 불러오기 useEffect

  // console.log("11111", bookMarkData);
  return (
    <MyPageDiv>
      <MyPageMenu />
      <BookMarkListDiv>
        <Title>북마크</Title>
        {bookMarkData.map(
          (
            el: { id: string; photo: [string]; name: string; address: string },
            key: React.Key | null | undefined
          ) => (
            <DeleteMiddleBookMark key={key} bookMarkDatas={el} />
          )
        )}
      </BookMarkListDiv>
    </MyPageDiv>
  );
};

export default MyPage;
