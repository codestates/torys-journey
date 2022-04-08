import styled from "styled-components";
import { Link } from "react-router-dom";

export const Searched = styled.div`
  width: 22.2%;
  margin-bottom: 25px;
  margin: 1.4%;
  box-sizing: border-box;
  padding: 0.5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
    overflow: hidden;
  }
`;

export const SearchedImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;



export const SearchedName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 30px;
  font-family: "NanumPen";
`;



export const SearchedAddress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 22px;
  font-family: "NanumPen";
`;