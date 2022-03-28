import React from "react"
import { useState } from "react";
import DetailInfo from "./DetailInfo";
import ReviewMember from "./ReviewMember";

const Info = () => {
  const [selected, setSelected] = useState<string>();
  const onClick = (e: any) => {
    setSelected(e.target.textContent);
  };
  
 
 return <div>
    <span><div onClick={onClick}>식당 상세</div><div onClick={onClick}>리뷰</div></span>
    
    {selected ==="리뷰"? <ReviewMember/>:<DetailInfo/>}
 {/*로그인했으면 reviewmember 로그인안된 상태면 reviewnonmember
 isLogin? <ReviewMember/>: <ReviewNonmember/>
 */}
  </div>;
};

export default Info;
