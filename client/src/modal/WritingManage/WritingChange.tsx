import React, { useState } from "react";
import axios from "axios";
import WritingChangeModalOnModal from "./WritingChangeModalOnModal";
import WritingDeleteModalOnModal from "./WritingDeleteModalOnModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  ModalBack,
  Close,
  WritingModal,
  Header,
  Content,
  InputDiv,
  Input,
  ButtonDiv,
  ButtonHover,
} from "../../style/Modal";

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
        .then(() => window.location.reload())
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
      .then(() => window.location.reload())
      .catch(() => alert("삭제할 수 있는 권한이 없습니다."));
  };

  //input에 넣고
  //수정 요청

  return (
    <ModalBack>
      <WritingModal>
        <Header>
          <div>Tory's-journey</div>
          <Close>
            <FontAwesomeIcon onClick={writingChangeModal} icon={faTimes} />
          </Close>
        </Header>
        <Content>
          <div>작성글 수정</div>
        </Content>
        <InputDiv>
          <Input
            type="text"
            value={value.name}
            placeholder="상호명"
            onChange={changeWriting("name")}
          />
          <Input
            type="text"
            placeholder="주소"
            value={value.address}
            onChange={changeWriting("address")}
          />
          <Input
            type="text"
            placeholder="전화번호"
            value={value.number}
            onChange={changeWriting("number")}
          />
          <Input
            type="text"
            placeholder="상세정보"
            value={value.detailInfo}
            onChange={changeWriting("detailInfo")}
          />
          <Input
            type="text"
            placeholder="영업시간 "
            value={value.officeHours}
            onChange={changeWriting("officeHours")}
          />
        </InputDiv>
        <ButtonDiv>
          <ButtonHover onClick={modalChange}>포스트 수정</ButtonHover>
          <ButtonHover onClick={modalDeleteChange}>포스트 삭제</ButtonHover>
          <ButtonHover onClick={writingChangeModal}>취소</ButtonHover>
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
        </ButtonDiv>
      </WritingModal>
    </ModalBack>
  );
};

export default WritingChange;
