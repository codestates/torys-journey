import React from "react";

const Pictures = (data: any): React.ReactElement => {
  console.log(data);
  return (
    <div>
      <img src={data.data} alt="사진을 업로드해주세요" />
    </div>
  );
};

export default Pictures;
