import React, { useState } from "react";
import axios from "axios";
import WritingChangeModalOnModal from "./WritingChangeModalOnModal";
import { useNavigate } from "react-router-dom";

type WritingChangeProps = {
  WritingChange: {
    id: number;
    name: string;
    address: string;
    number: string;
    detailInfo: string;
    officeHours: string;
  };
  writingChangeModal: () => void;
};

const WritingChange = ({
  WritingChange,
  writingChangeModal,
}: WritingChangeProps) => {
  const navigate = useNavigate();

  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");
  const [modal, setModal] = useState(false); // 포스트 등록 누를 시 나오는 모달 state

  const [value, setValue] = useState({
    name: WritingChange.name,
    address: WritingChange.address,
    number: WritingChange.number,
    detailInfo: WritingChange.detailInfo,
    officeHours: WritingChange.officeHours,
  });

  const changeWriting = (target: string) => (e: { target: { value: any } }) => {
    setValue({ ...value, [target]: e.target.value });
  };

  const modalChange = () => {
    setModal(!modal);
  };

  const patchWriting = () => {
    const { name, address, number, detailInfo, officeHours } = value;
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/restaurant/${WritingChange.id}`,
        {
          name: name,
          address: address,
          number: number,
          detailInfo: detailInfo,
          officeHours: officeHours,
        },
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("수정이 완료되었습니다."))
      .then(() => navigate("/"))
      .catch(() => console.log("실패다"));
    // reponse 응답에 따라 다르게 반응하는 방법 찾아보고 구현하기
  };

  //input에 넣고
  //수정 요청

  return (
    <div>
      <div>작성글 수정 모달</div>
      <br />
      <input type="text" value={value.name} onChange={changeWriting("name")} />
      <br />
      <input
        type="text"
        value={value.address}
        onChange={changeWriting("address")}
      />
      <br />
      <input
        type="text"
        value={value.number}
        onChange={changeWriting("number")}
      />
      <br />
      <input
        type="text"
        value={value.detailInfo}
        onChange={changeWriting("detailInfo")}
      />
      <br />
      <input
        type="text"
        value={value.officeHours}
        onChange={changeWriting("officeHours")}
      />

      <button onClick={modalChange}>포스트 수정</button>
      <button onClick={writingChangeModal}>취소</button>
      {modal ? (
        <WritingChangeModalOnModal
          modalChange={modalChange}
          patchWriting={patchWriting}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default WritingChange;
