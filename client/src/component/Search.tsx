import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchForm, SearchFormInput, SearchDiv } from "../style/Search";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    dispatch({ type: "search", payload: searchTerm });
  }); // shoplist에서 사용

  return (
    <SearchDiv>
      <SearchForm>
        <SearchFormInput
          type="search"
          placeholder="지역명이나 상호명을 입력하세요"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </SearchForm>
    </SearchDiv>
  );
};

export default SearchBar;
