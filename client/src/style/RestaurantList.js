import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const RestaurantListDiv = styled.div`
  box-sizing: border-box;
  width: 22.2%;
  padding: 0.5%;
  margin: 1.4%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
  }
`;

export const RestaurantDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const RestaurantMainDiv = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;
export const MapSearch = styled(Link)`
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
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: "Nanum";
  width: 4%;
  margin-right: 1.5%;
  &:hover {
    border-bottom: 3px solid yellowgreen;
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const RestaurantH2 = styled.h2`
  width: 100%;
  margin: 10px 0 0;
`;

export const RestaurantName = styled.div`
  font-size: 1.5rem;
  color: black;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RestaurantNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 30px;
  font-family: "NanumPen";
`;

export const MySearchDiv = styled.div`
  width: 5%;
  font-family: "Nanum";
  text-align: center;
  margin-right: 1%;
  &:hover {
    border-bottom: 3px solid yellowgreen;
    cursor: pointer;
    color: black;
    transform: scale(1.15);
  }
`;

export const RestaurantAddressDiv = styled.div`
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 22px;
  font-family: "NanumPen";
`;
