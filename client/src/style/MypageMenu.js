import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* background-color: pink; */
  margin-left: 7%;
`;

export const MenuItem = styled.li`
  text-decoration: none;
  border-bottom: 1px solid gray;
  font-size: 1rem;
  width: 90%;
  margin: 5px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  /* align-items: center; */
  transition: 0.5s;

  &:hover {
    transform: scale(1.15);
    cursor: pointer;
    color: black;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 1em;
  font-size: 1.1rem;
  /* font-weight: bold; */

  color: black;

  &:hover {
    cursor: pointer;
  }
`;
