import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const MenuItem = styled.li`
  text-decoration: none;
  background-color: gold;
  font-size: 1rem;
  width: 90%;
  margin: 10px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 1em;
  fontsize: 1.2rem;
  fontweight: bold;
  color: #555;
  &:hover {
    color: white;
  }
`;
