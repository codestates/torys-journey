import axios from "axios";
import React, { useState, useEffect } from "react";
import MyPageMenu from "../component/MyPageMenu";
import { useNavigate, Link } from "react-router-dom";
import DeleteBookMark from "../modal/DeleteBookMark";
import {
  MyPageDiv,
  BookMarkListDiv,
  BookMarkItemDiv,
  BookMarkImg,
  MyPageMenuDiv,
  RestaurantAddressDiv,
  RestaurantNameDiv,
  Title,
} from "../style/Mypage";

const MyPage = () => {
  const navigate = useNavigate();

  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const [bookMarkData, setBookMarkData] = useState<any>([]); //북마크 정보 받아오기
  const [deleteBookMark, setDeleteBookMark] = useState<boolean>(false);

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

  const handleMadalDeleteBookMark = () => {
    setDeleteBookMark(!deleteBookMark);
  };
  console.log("11111", bookMarkData);
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
            <BookMarkItemDiv key={key}>
              <Link
                to={`/restaurantinfo/${el.id}`}
                style={{ textDecoration: "none" }}
              >
                <BookMarkImg src={el.photo[0]} alt="사진을 넣어주세요." />
                <RestaurantNameDiv>
                  <div>{el.name}</div>
                </RestaurantNameDiv>
                <RestaurantAddressDiv>{el.address}</RestaurantAddressDiv>
              </Link>
              <button onClick={handleMadalDeleteBookMark}>삭제하기</button>
              {deleteBookMark ? (
                <DeleteBookMark
                  handleMadalDeleteBookMark={handleMadalDeleteBookMark}
                  bookMarkData={el}
                />
              ) : (
                ""
              )}
            </BookMarkItemDiv>
          )
        )}
      </BookMarkListDiv>
    </MyPageDiv>
  );
};

export default MyPage;
