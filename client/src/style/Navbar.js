import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.ul`
  display: flex;
  padding: 0;
`;

export const MenuItem = styled.li`
  list-style: none;
  width: 20%;
  font-family: "Nanum";

  &:hover {
    border-bottom: 4px solid #73B4AC;
    cursor: pointer;
    color: black;
    transform: scale(1.15);
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 1em;
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
`;
