import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchForm = styled.form`
  display: flex;
  height: 40px;
`;

export const SearchFormInput = styled.input`
  flex:1;
  margin-right: 10px;
  border: 1px solid black
  border-radius: 0.3em;
  font-size: 1rem;
`;

export const SearchFormSubmit = styled.input`
  width: 4em;
  border 0;
  border-radius: 0.3em;
  font-size: 1rem;
  background: gold;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;
