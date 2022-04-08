import axios from "axios";
import React, { useState, useEffect } from "react";
import MyPageMenu from "../component/MyPageMenu";
import { useNavigate, Link } from "react-router-dom";
import DeleteBookMark from "../modal/DeleteBookMark";
import {
  MyPageDiv,
  BookMarkListDiv,
  BookMarkItemDiv,
  RestaurantImg,
  MyPageMenuDiv,
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
      <MyPageMenuDiv>
        <MyPageMenu />
      </MyPageMenuDiv>
      <BookMarkListDiv>
        {bookMarkData.map(
          (
            el: { id: string; photo: [string]; name: string },
            key: React.Key | null | undefined
          ) => (
            <BookMarkItemDiv key={key}>
              <Link to={`/restaurantinfo/${el.id}`}>
                <RestaurantImg src={el.photo[0]} alt="사진을 넣어주세요." />
                <div>{el.name}</div>
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
