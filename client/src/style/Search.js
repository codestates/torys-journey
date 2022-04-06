import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: baseline;
`;

export const SearchFormInput = styled.input`
  width: 70%;
  height: 100%;
  margin-left: 10%;
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

export const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const SearchDiv2 = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: gold;
  /* border: 3px groove black; */
`;

export const RestaurantImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const RestaurantListDiv = styled.div`
  width: 17%;
  margin: 1.5%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;
