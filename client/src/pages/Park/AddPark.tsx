import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../../redux/Store";
import Post from "./Modal/Post";
import { Link } from "react-router-dom";

import Upload from "../Restaurant/component/RestaurantMain/Upload";
export type RootState = ReturnType<typeof store.getState>;

const AddPark = () => {
  const dispatch = useDispatch();

  const [pictureAddress, setPictureAddress] = useState();
  const getAddress = (selected: any) => {
    setPictureAddress(selected);
  }; //사진 imgbb에 업로드해서 주는 url 받아오는 것

  const [parkEnrollment, setParkEnrollment] = useState({
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
      setParkEnrollment({
        ...parkEnrollment,
        [key]: e.target.value,
      }); // input value를 useState로 넣어주는 함수
    };

  const parkEnroll = () => {
    dispatch({ type: "enrollment", payload: parkEnrollment });
  }; //redux에 등록

  useEffect(parkEnroll);

  return (
    <div>
      <h1>공원 등록하기</h1>
      <div>
        <input
          type="text"
          placeholder="상호명을 입력하세요"
          onChange={handleInputValue("name")}
        />

        <input
          type="text"
          placeholder="주소를 입력하세요"
          onChange={handleInputValue("address")}
        />

        <input
          type="text"
          placeholder="전화번호를 입력하세요"
          onChange={handleInputValue("phoneNumber")}
        />

        <input
          type="text"
          placeholder="영업시간을 입력하세요"
          onChange={handleInputValue("officeHours")}
        />

        <input
          type="text"
          placeholder="상세정보를 입력하세요"
          onChange={handleInputValue("detailInfo")}
        />
      </div>
      <Upload getAddress={getAddress} />
      <div>
      <div onClick={handlePostModal}>포스트 등록</div>
        {postModal ? (
          <Post
            handlePostModal={handlePostModal}
            pictureAddress={pictureAddress}
          />
        ) : (
          ""
        )}

        <Link to="/restaurant">취소 </Link>
      </div>
    </div>
  );
};

export default AddPark;
