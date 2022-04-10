import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantDiv = styled.div`
  margin-left: 20px;
  margin-top: 30px;
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
  border-radius: 10px;
  background-color: #73b4ac;
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
  width: 98%;
  margin: 1%;
  flex-direction: column;
  border: 1px solid black;
  font-size: 1.3rem;
  justify-content: space-around;
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
  font-family: "Nanum";
`;

export const BookMarkDiv = styled.div`
  width: 3%;
  position: relative;
  margin-top: 10px;
`;

export const ReviewWritingDiv = styled.div`
  display: flex;
  border-bottom: 3px solid #73b4ac;
`;

export const ReviewWritingTitleDiv = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ReviewWritingInput = styled.input`
  margin: 10px;
  width: 50%;
`;

export const ReviewWritingStar = styled.div`
  margin: 10px;
  font-size: 1.5rem;
`;

export const ReviewWritingButton = styled.button`
  margin: 10px;
  font-size: 1rem;
`;

export const ReviewDiv = styled.div`
  border-bottom: 3px solid #73b4ac;
  margin: 10px;
  font-size: 1rem;
`;

export const InformationDiv = styled.div`
  margin: 10px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;
export const NameDiv = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 5px;
`;

export const RestaurantName = styled.h1`
  width: 90%;
`;

export const RestaurantNameDiv = styled.div`
  display: flex;
`;
