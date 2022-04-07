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
  padding: 0.5%;
  margin: 1%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;

export const RestaurantDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RestaurantMainDiv = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;
export const MapSearch = styled(Link)`
  /* position: absolute;
  top: 19.5%;
  right: 10%; */
  margin-left: 1%;
  width: 110px;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: gold;
  border: 1px solid black;
  font-size: 1.2rem;
  color: black;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;
export const ShopEnrollLink = styled(Link)`
  /* position: absolute;
  top: 19.5%;
  right: 6%; */
  margin-left: 1%;
  height: 100%;
  width: 75px;
  font-size: 1.2rem;
  text-align: center;
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

export const RestaurantName = styled.div`
  font-size: 1.5rem;

  color: black;
  text-decoration: none;
`;
