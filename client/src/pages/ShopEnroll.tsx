import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../redux/Store";
import Post from "../modal/Post";
import { Link } from "react-router-dom";

export type RootState = ReturnType<typeof store.getState>;

const ShopEnroll = () => {
  const dispatch = useDispatch();

  const [restaurantEnrollment, setRestaurantEnrollment] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    officeHours: "",
    detailInfo: "",
  }); //input value 넣는 useState

  const [postModal, setPostModal] = useState(false); // post modal창 띄워주는 useState

  const handlePostModal = () => {
    setPostModal(!postModal);
  }; // post modal창 띄워주는 함수

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setRestaurantEnrollment({
        ...restaurantEnrollment,
        [key]: e.target.value,
      }); // input value를 useState로 넣어주는 함수
    };

  const shopEnroll = () => {
    dispatch({ type: "enrollment", payload: restaurantEnrollment });
  }; //redux에 등록

  useEffect(shopEnroll);

  return (
    <div>
      <input
        type="text"
        placeholder="상호명을 입력하세요"
        onChange={handleInputValue("name")}
      />
      <br />
      <input
        type="text"
        placeholder="주소를 입력하세요"
        onChange={handleInputValue("address")}
      />
      <br />
      <input
        type="text"
        placeholder="전화번호를 입력하세요"
        onChange={handleInputValue("phoneNumber")}
      />
      <br />
      <input
        type="text"
        placeholder="영업시간을 입력하세요"
        onChange={handleInputValue("officeHours")}
      />
      <br />
      <input
        type="text"
        placeholder="상세정보를 입력하세요"
        onChange={handleInputValue("detailInfo")}
      />
      <br />
      <button onClick={handlePostModal}>포스트 등록</button>
      {postModal ? <Post handlePostModal={handlePostModal} /> : ""}
      <Link to="/restaurant">
        <button>취소</button>
      </Link>
    </div>
  );
};

export default ShopEnroll;
