import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const RestaurantLink = styled(Link)``;

export const RestaurantListDiv = styled.div`
  width: 30%;
  margin: 1.5%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;

export const RestaurantDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RestaurantMainDiv = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;
export const MapSearch = styled(Link)`
  position: absolute;
  top: 19.5%;
  right: 10%;
  text-decoration: none;
  background-color: gold;
  border: 1px solid black;
  color: black;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;
export const ShopEnrollLink = styled(Link)`
  position: absolute;
  top: 19.5%;
  right: 6%;
  text-decoration: none;
  background-color: gold;
  border: 1px solid black;
  color: black;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

export const RestaurantH2 = styled.h2`
  width: 100%;
  margin: 10px 0 0;
`;
