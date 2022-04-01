import axios from "axios";
import React, { useState, useEffect } from "react";
import MyPageMenu from "../component/MyPageMenu";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import { useNavigate, Link } from "react-router-dom";
import DeleteBookMark from "../modal/DeleteBookMark";

export type RootState = ReturnType<typeof store.getState>;

const MyPage = () => {
  const navigate = useNavigate();

  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const [bookMarkData, setBookMarkData] = useState<any>([]); //북마크 정보 받아오기
  const [deleteBookMark, setDeleteBookMark] = useState<boolean>(false); //북마크 정보 받아오기

  const callUserBookMark = () => {
    if (localStorageTokenCheck) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/bookmark`, {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        })
        .then((res) => setBookMarkData(res.data)) //get data state에 저장
        .catch(() => alert("북마크 불러오기를 실패하였습니다."));
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/");
    }
  };

  useEffect(callUserBookMark, [callUserBookMark]); // 정보 불러오기 useEffect

  const handleMadalDeleteBookMark = () => {
    setDeleteBookMark(!deleteBookMark);
  };

  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div>마이페이지 북마크</div>
      {bookMarkData.map((el: any) => (
        <Link to={`/restaurantinfo/${el.id}`}>
          <img src={el.photo[0]} alt="사진을 넣어주세요." />
          <div>{el.name}</div>
        </Link>
      ))}
      {/* 북마크 사진 넣는 곳 */}
      <button onClick={handleMadalDeleteBookMark}>삭제하기</button>
      {/* 모달창 띄우는 버튼 */}
      {deleteBookMark ? (
        <DeleteBookMark
          handleMadalDeleteBookMark={handleMadalDeleteBookMark}
          bookMarkData={bookMarkData}
        />
      ) : (
        ""
      )}
    </div>
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
