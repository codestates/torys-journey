// import React, { useState } from "react";
// import SearchBar from "../../component/Search";
// import MyLocation from "../../component/MyLocation";
// import { ButtonDiv, ParkMainDiv } from "../../style/Park";
// import HospitalList from "./HospitalList";

// const HospitalMain = () => {
//   const [clicked, setClicked] = useState(false);
//   const handleMap = () => {
//     setClicked(!clicked);
//   };
//   return (
//     <div>
//       <div>
//         <SearchBar />
//         <div>
//           <div onClick={handleMap}>내 주변 검색</div>
//           <div> 식당등록 </div>
//         </div>
//       </div>
//       {clicked ? <MyLocation /> : ""}
//       <HospitalList />
//     </div>
//   );
// };

// export default HospitalMain;

import React from "react";

const HospitalMain = () => {
  return <div>HospitalMain</div>;
};

export default HospitalMain;
