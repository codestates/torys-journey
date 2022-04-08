import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;

export const HeaderTitle = styled.img`
  width: 400px;
  height: 100px;
  margin-top: 30px;
`;

export const LoginDiv = styled.div`
  position: absolute;
  font-family: "Nanum";
  right: 0.5rem;
  background-color: white;
  width: 80px;
  text-align: center;
  &:hover {
    border-bottom: 3px solid yellowgreen;
    cursor: pointer;
    color: black;
    transform: scale(1.15);
  }
`;

export const DivContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 2rem;
`;

export const MypageLink = styled(Link)`
  position: absolute;
  font-family: "Nanum";
  right: 6rem;
  padding: 0;
  text-decoration: none;
  color: black;
  width: 80px;
  text-align: center;
  &:hover {
    border-bottom: 3px solid yellowgreen;
    cursor: pointer;
    color: black;
    transform: scale(1.15);
  }
`;
