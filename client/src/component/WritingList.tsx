import React, { useState } from "react";
import WritingChange from "../modal/WritingChange";

type WritingListProps = {
  writingList: {
    id: number;
    name: string;
    address: string;
    number: string;
    detailInfo: string;
    officeHours: string;
  };
};

const WritingList = ({ writingList }: WritingListProps) => {
  const [writingChange, setWritingChange] = useState(false);

  const writingChangeModal = () => {
    setWritingChange(!writingChange);
  };

  //WritingManage에서 본인이 쓴 글을 전부 받아 하나씩 컴포넌트에서 만들어서 WritingChange(글 쓴 것 수정 모달) 띄우기.
  //수정 버튼을 눌렀을 때 하나씩 띄우려면 컴포넌트로 전달해야 함.

  return (
    <div>
      <div>
        {writingList.name}
        {writingList.address}
        {writingList.detailInfo}
        {/* {writingList.officeHours} */}
        <button onClick={writingChangeModal}>수정</button>
        {writingChange ? (
          <WritingChange
            key={writingList.id}
            WritingChange={writingList}
            writingChangeModal={writingChangeModal}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WritingList;
