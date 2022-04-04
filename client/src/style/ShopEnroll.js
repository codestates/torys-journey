import styled from "styled-components";
import { Link } from "react-router-dom";

export const WritingMainDiv = styled.div`
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const WritingTitle = styled.h2`
  border-bottom: 1px solid lightgrey;
`;

export const WritingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WritingInput = styled.input`
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const WritingButton = styled.button`
  width: 30%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 30px;
  background: gold;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 10px;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;
