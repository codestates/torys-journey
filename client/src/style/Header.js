import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  padding: 0;
`;

export const LoginButton = styled.button`
  background-color: gold;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

export const MypageLink = styled(Link)`
  position: absolute;
  top: 2rem;
  right: 6rem;
  padding: 0;
  text-decoration: none;
`;
