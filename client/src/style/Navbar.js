import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.ul`
  display: flex;
  padding: 0;
`;

export const MenuItem = styled.li`
  list-style: none;
  background-color: gold;
  width: 20%;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
    width: 30%;
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
