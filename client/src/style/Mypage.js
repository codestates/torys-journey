import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyPageDiv = styled.div`
  display: flex;
`;

export const MyPageInfo = styled.div`
  margin-left: 10%;
  display: flex;
  border: 3px solid gold;
  flex-direction: column;
  width: 50%;
`;

export const MypageInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;
