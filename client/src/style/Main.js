import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.ul`
  display: flex;
`;

export const MainImg = styled.img`
  width: 96%;
  padding: 2%;
  height: 300px;
  padding-bottom: 0px;
`;

export const MainImgContainer = styled.div`
  width: 30%;
  margin: 30px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
  }
`;

export const MainImgTag = styled.div`
  text-align: center;
  padding: 10px;
  padding-top: 0px;
`;

export const MainTag = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin-left: 10%;
  margin-right: 10%;
`;

export const MainTag2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 23%;
  /* margin-right: 15%; */
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 40px;
  font-family: "NanumPen";

  /* margin-right: 15%; */
`;
