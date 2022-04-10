import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantDiv = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
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
  border-radius: 5px;
  background-color: #73b4ac;
  border: 1px solid black;
  transition: 0.5s;
  &:hover {
    background-color: #93d5cd;
    cursor: pointer;
    
   
  }
`;

export const TabDiv = styled.div`
  display: flex;

 
`;

export const DetailInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  font-size: 1.3rem;
  justify-content: space-around;
  border-radius: 5px;

`;

export const InfoDiv = styled.div`
  width: 60%;
  margin-top: 30px;
  font-family: "Nanum";

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
  margin-top: 50px;
`;

export const BookMarkDiv = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
`;

export const ReviewWritingDiv = styled.div`
  display: flex;
  /* border: 1px solid black; */
  font-family: "Nanum";
`;

export const ReviewWritingTitleDiv = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Nanum";
`;

export const ReviewWritingInput = styled.input`
  margin: 10px;
  width: 50%;
`;

export const ReviewWritingStar = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  font-family: "Nanum";
`;

export const ReviewWritingButton = styled.button`
  margin: 10px;
  font-size: 1rem;
  margin-left: 30px;
  &:hover{cursor: pointer;}
`;

export const ReviewDiv = styled.div`

  margin: 10px;
  font-size: 1rem;
`;

export const InformationDiv = styled.div`
  margin: 10px;
  padding: 10px 0px 0px 0px;
  
`;

export const RestaurantName= styled.h1`
margin-top: 0px;
font-family: "Nanum";
border-bottom: 2px double ;
`

export const Div= styled.div`
font-size:20px;
font-weight: bold;
padding: 20px 10px 0px 20px;

`

export const InfoContainer= styled.div`
display: flex;
flex-direction: row;

`