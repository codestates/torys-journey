import React, { useState } from "react";
import axios from "axios";
import WritingChangeModalOnModal from "./WritingChangeModalOnModal";
import WritingDeleteModalOnModal from "./WritingDeleteModalOnModal";

type WritingChangeProps = {
  WritingChange: {
    id: number;
    name: string;
    photo: string[]; //photo로 바꾸기
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
  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");
  const [modal, setModal] = useState(false); // 포스트 등록 누를 시 나오는 모달 state
  const [modalDelete, setModalDelete] = useState(false); // 포스트 삭제 누를 시 나오는 모달 state

  const [value, setValue] = useState({
    name: WritingChange.name,
    address: WritingChange.address,
    number: WritingChange.number,
    detailInfo: WritingChange.detailInfo,
    officeHours: WritingChange.officeHours,
  }); //수정하는 input value를 넣는 state

  const changeWriting = (target: string) => (e: { target: { value: any } }) => {
    setValue({ ...value, [target]: e.target.value });
  }; //포스트 수정 input value 관리 state

  const modalChange = () => {
    setModal(!modal);
  }; //포스트 수정 모달 state

  const modalDeleteChange = () => {
    setModalDelete(!modalDelete); //포스트 삭제 모달 state
  };
  //! 서버에 수정 요청
  const patchWriting = () => {
    const { name, address, number, detailInfo, officeHours } = value;
    if (name && address) {
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
        .catch((res) => {
          if (res.response.status === 401)
            alert("정보를 수정할 수 있는 권한이 없습니다."); //오류 status에 따른 alert
        });
    } else {
      alert("상호명과 주소는 필수입니다.");
    }
    // reponse 응답에 따라 다르게 반응하는 방법 찾아보고 구현하기
  };
  //! 서버에 삭제 요청
  const deleteWriting = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/restaurant/${WritingChange.id}`,
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("삭제가 완료되었습니다."))
      .catch(() => alert("삭제할 수 있는 권한이 없습니다."));
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
      <button onClick={modalDeleteChange}>포스트 삭제</button>
      <button onClick={writingChangeModal}>취소</button>
      {modal ? (
        <WritingChangeModalOnModal
          modalChange={modalChange}
          patchWriting={patchWriting}
        />
      ) : (
        ""
      )}
      {modalDelete ? (
        <WritingDeleteModalOnModal
          modalDeleteChange={modalDeleteChange}
          deleteWriting={deleteWriting}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default WritingChange;
