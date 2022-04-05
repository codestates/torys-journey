// import React from "react";
// import { useState } from "react";
// import { Data } from "../pages/Restaurant";
// import dummyData from "../pages/TESTTESTTEST";
// import { Link } from "react-router-dom";

// type dummyDataProps = {
//   data: Data;
// };

// const SearchBar = (data: dummyDataProps) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <div>
//       <input
//         type="search"
//         placeholder="지역 상호명을 입력하세요"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />
//       {dummyData
//         .filter((val) => {
//           if (searchTerm === "") {
//             return undefined;
//           } else if (
//             val.name.toLowerCase().includes(searchTerm.toLowerCase())
//           ) {
//             return val;
//           } else if (
//             val.address.toLowerCase().includes(searchTerm.toLowerCase())
//           ) {
//             return val;
//           }
//         })
//         .map((val, key) => {
//           return (
//             <div key={key}>
//               <Link to={`/restaurantinfo/${val.id}`}>
//                 <p>{val.picture[1]}</p>
//               </Link>
//               <Link to={`/restaurantinfo/${val.id}`}>
//                 <p>{val.name}</p>
//               </Link>
//               <Link to={`/restaurantinfo/${val.id}`}>
//                 <p>{val.address}</p>
//               </Link>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import { SearchForm, SearchFormInput, SearchFormSubmit } from "../style/Search";

const SearchBar = () => {
  return (
    <SearchForm>
      <SearchFormInput type="search" />
      <SearchFormSubmit type="submit" value="검색" />
    </SearchForm>
  );
};

export default SearchBar;
