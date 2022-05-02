import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Modal/Post";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const AddHospital = () => {
  const dispatch = useDispatch();
  const [newHospital, setNewHospital] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    officeHours: "",
    detailInfo: "",
  
  });
  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewHospital({ ...newHospital, [key]: e.target.value });
    };
  const HospitalInfo = () => {
    dispatch({ type: "enrollment", payload: newHospital });
  };
  useEffect(HospitalInfo);

  //!-----------------이미지추가 관련-------------------------
  const [selected, setSelected] = useState([]); //선택한 사진 담는 빈배열
  const imageUpload = (key: string) => (event: any) => {
    const formData: any = new FormData(); //파일을 전달할때는 formData를 써야함
    formData.set("key", "97752c84b8e085bd2b5d5a78368f1cd0"); // imgbb에 key값과 파일을 필수적으로 보내줘야함
    for (let i = 0; i < event.target.files.length; i++) {
      formData.append(`image`, event.target.files[i]);
    } //선택한 사진들을 formdata에 담는다.
    axios
      .post("https://api.imgbb.com/1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => setSelected(selected.concat(res.data.data.url)));

    //imgbb로 post 요청해서 받아온 응답에서 사진의 주소를 selected에 담는다.
  };
  //!!----------------------------------------------------
  //!!------------------이미지 삭제하기-----------------------------
  const handleDeleteImage = (id: number) => {
    setSelected(selected.filter((_, index) => index !== id));
  };
  //!!----------------------------------------------------
  const [postModal, setPostModal] = useState(false);
  const handlePostModal = () => {
    setPostModal(!postModal);
  };
  return (
    <div>
      <h1>병원 등록하기</h1>
      <input
        type="text"
        placeholder="동물병원 이름을 적어주세요"
        onChange={handleInputValue("name")}
      />
      <input
        type="text"
        placeholder="동물병원 주소를 적어주세요"
        onChange={handleInputValue("address")}
      />
      <input
        type="text"
        placeholder="동물병원 전화번호를 적어주세요"
        onChange={handleInputValue("phoneNumber")}
      />
      <input
        type="text"
        placeholder="동물병원 영업시간을 적어주세요"
        onChange={handleInputValue("officeHours")}
      />
      <input
        type="text"
        placeholder="추가 사항을 적어주세요"
        onChange={handleInputValue("detailInfo")}
      />
      <form>
        <input type="file" accept="image/*" onChange={imageUpload("photo")} />
        {selected.map((el, id) => (
          <div>
            <img src={el} alt="첨부파일" height="200px" width="200px" />
            <div onClick={() => handleDeleteImage(id)}> 삭제하기 </div>
          </div>
        ))}
      </form>
      <button onClick={handlePostModal}>포스트 등록하기</button>
      <button>취소</button>
      {postModal ? (
        <Post selected={selected} handlePostModal={handlePostModal} />
      ) : (
        ""
      )}
      <Link to="/hospital"></Link>
    </div>
  );
};

export default AddHospital;
