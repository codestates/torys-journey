// import React, { useState } from "react";
// import SearchBar from "../../component/Search";
// import MyLocation from "../../component/MyLocation";
// import { ButtonDiv, ParkMainDiv } from "../../style/Park";
// import ParkList from "./ParkList";

// const ParkMain = () => {
//   const [clicked, setClicked] = useState(false);
//   const handleMap = () => {
//     setClicked(!clicked);
//   };
//   return (
//     <div>
//       <ParkMainDiv>
//         <SearchBar />
//         <ButtonDiv>
//           <div onClick={handleMap}>내 주변 검색</div>
//           <div> 식당등록 </div>
//         </ButtonDiv>
//       </ParkMainDiv>
//       {clicked ? <MyLocation /> : ""}
//       <ParkList />
//     </div>
//   );
// };

// export default ParkMain;

import React from "react";

const ParkMain = () => {
  return <div>ParkMain</div>;
};

export default ParkMain;
