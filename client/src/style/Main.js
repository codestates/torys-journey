import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.ul`
  display: flex;
`;

export const MainImg = styled.img`
  width: 96%;
  padding: 2%;
  height: 300px;
`;

export const MainImgContainer = styled.div`
  width: 30%;
  margin: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;

export const MainImgTag = styled.div`
  text-align: center;
  padding: 10px;
`;

export const MainTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
`;
