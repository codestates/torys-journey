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
