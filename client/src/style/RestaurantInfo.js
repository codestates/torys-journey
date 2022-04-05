import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantDiv = styled.div`
  flex-wrap: wrap;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;

export const RestaurantTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  width: 50%;
  height: 40px;
  font-size: 1.2rem;
  font-weight: bold;

  background-color: gold;
  border: 1px solid black;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

export const TabDiv = styled.div`
  display: flex;
`;

export const DetailInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const InfoDiv = styled.div`
  width: 60%;
`;

export const ImgModal = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const RestaurantMainDiv = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export const BookMarkDiv = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
`;
