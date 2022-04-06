import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../redux/Store";
import Post from "../modal/Post";
import { Link } from "react-router-dom";

import Upload from "../component/Upload";

import {
  WritingDiv,
  WritingInput,
  WritingButton,
  WritingTitle,
  WritingMainDiv,
} from "../style/ShopEnroll";

export type RootState = ReturnType<typeof store.getState>;

const ShopEnroll = () => {
  const dispatch = useDispatch();

  const [pictureAddress, setPictureAddress] = useState();
  const getAddress = (selected: any) => {
    setPictureAddress(selected);
  }; //사진 imgbb에 업로드해서 주는 url 받아오는 것

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
    <WritingMainDiv>
      <WritingTitle>식당 등록하기</WritingTitle>
      <WritingDiv>
        <WritingInput
          type="text"
          placeholder="상호명을 입력하세요"
          onChange={handleInputValue("name")}
        />

        <WritingInput
          type="text"
          placeholder="주소를 입력하세요"
          onChange={handleInputValue("address")}
        />

        <WritingInput
          type="text"
          placeholder="전화번호를 입력하세요"
          onChange={handleInputValue("phoneNumber")}
        />

        <WritingInput
          type="text"
          placeholder="영업시간을 입력하세요"
          onChange={handleInputValue("officeHours")}
        />

        <WritingInput
          type="text"
          placeholder="상세정보를 입력하세요"
          onChange={handleInputValue("detailInfo")}
        />
      </WritingDiv>

      <Upload getAddress={getAddress} />

      <WritingButton onClick={handlePostModal}>포스트 등록</WritingButton>
      {postModal ? (
        <Post
          handlePostModal={handlePostModal}
          pictureAddress={pictureAddress}
        />
      ) : (
        ""
      )}

      <Link to="/restaurant">
        <WritingButton>취소</WritingButton>
      </Link>
    </WritingMainDiv>
  );
};

export default ShopEnroll;
