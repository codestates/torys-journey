import React, { useState } from "react";
import WritingChange from "../modal/WritingChange";
import {
  WritingDiv,
  WritingItemDiv,
  WritingName,
  WritingAddress,
  WritingButton,
  WritingContent,
} from "../style/Mypage";

type WritingListProps = {
  writingList: {
    id: number;
    name: string;
    photo: string[]; //photo로 바꾸기
    address: string;
    number: string;
    detailInfo: string;
    officeHours: string;
  };
};

const WritingList = ({ writingList }: WritingListProps) => {
  //본인이 썼던 글 객체로 하나씩 props로 받는 것
  const [writingChange, setWritingChange] = useState(false);

  const writingChangeModal = () => {
    setWritingChange(!writingChange);
  };

  //WritingManage에서 본인이 쓴 글을 전부 받아 하나씩 컴포넌트에서 만들어서 WritingChange(글 쓴 것 수정 모달) 띄우기.
  //수정 버튼을 눌렀을 때 하나씩 띄우려면 컴포넌트로 전달해야 함.

  return (
    <WritingDiv>
      <WritingItemDiv>
        <WritingName>{writingList.name}</WritingName>
        <WritingAddress>{writingList.address}</WritingAddress>
        <WritingButton onClick={writingChangeModal}>수정 / 삭제</WritingButton>
        <WritingContent>{writingList.detailInfo}</WritingContent>
        {/* {writingList.officeHours} */}

        {writingChange ? (
          <WritingChange
            key={writingList.id}
            WritingChange={writingList}
            writingChangeModal={writingChangeModal}
          />
        ) : (
          ""
        )}
      </WritingItemDiv>
    </WritingDiv>
  );
};

export default WritingList;
