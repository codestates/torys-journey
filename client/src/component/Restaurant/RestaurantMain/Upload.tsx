import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { MainDiv, PreviewDiv, ItemDiv, DeleteDiv } from "../../../style/Upload";

const Upload = ({ getAddress }: any) => {
  const [selected, setSelected] = useState([]); //선택한 사진 담는 빈배열

  const imageUpload = (event: any) => {
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

  useEffect(() => {
    getAddress(selected); //shopenroll의 getaddress함수에 selected를 넘긴다.
  });

  const handleDeleteImage = (id: any) => {
    // 사진 지우는 함수
    setSelected(selected.filter((_, index) => index !== id));
  };

  return (
    <MainDiv>
      <ItemDiv>
        {selected.map((el, id) => (
          <PreviewDiv className="preview" key={id}>
            <img src={el} key={el} alt={`${el}`} height="150px" width="250px" />
            <DeleteDiv onClick={() => handleDeleteImage(id)}>
              삭제하기
            </DeleteDiv>
          </PreviewDiv>
        ))}
      </ItemDiv>

      <form>
        <input type="file" accept="image/*" onChange={imageUpload} />
      </form>
    </MainDiv>
  );
};

export default Upload;
