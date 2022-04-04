import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RestaurantTab = styled.div`
  width: 50%;
  height: 5s0px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

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
  margin-top: 3%;
`;
