import React from "react";
import { useState } from "react";
import dummyData from "../pages/TESTTESTTEST";
import { Link } from "react-router-dom";
import {
  SearchForm,
  SearchFormInput,
  SearchFormSubmit,
  SearchDiv,
  RestaurantImg,
  RestaurantListDiv,
  SearchDiv2,
} from "../style/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [button, setButton] = useState(false);
  const submitButton = () => {
    setButton(!button);
  };
  return (
    <SearchDiv>
      <SearchForm>
        <SearchFormInput
          type="search"
          placeholder="지역 상호명을 입력하세요"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {/* <SearchFormSubmit type="submit" value="검색" onClick={submitButton} /> */}
      </SearchForm>
      <SearchDiv2>
        {dummyData
          .filter((val) => {
            if (searchTerm === "") {
              return undefined;
            } else if (
              // button === true &&
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              // button === true &&
              val.address.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <RestaurantListDiv key={key}>
                <Link to={`/restaurantinfo/${val.id}`}>
                  <RestaurantImg src={val.picture[0]} alt="식당" />
                  <div>{val.name}</div>
                  <div>{val.address}</div>
                </Link>
              </RestaurantListDiv>
            );
          })}
      </SearchDiv2>
    </SearchDiv>
  );
};

export default SearchBar;

// import React from "react";
// import { SearchForm, SearchFormInput, SearchFormSubmit } from "../style/Search";

// const SearchBar = () => {
//   return (
//     <SearchForm>
//       <SearchFormInput type="search" />
//       <SearchFormSubmit type="submit" value="검색" />
//     </SearchForm>
//   );
// };

// export default SearchBar;
