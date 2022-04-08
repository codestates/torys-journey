import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyPageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MyPageMenuDiv = styled.div`
  width: 10%;
  margin-top: 1.5%;
`;
export const MyPageInfo = styled.div`

  display: flex;
  flex-direction: column;
  margin-top: 2%;
  width: 70%;
  margin-left: 5%;
`;

export const MypageInput = styled.input`

  width: 60%;
  height: 50px;
  border-radius: 8px;
  /* margin-top: 10px; */
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const WritingDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1%;
  width: 86%;
`;
export const WritingItemDiv = styled.div`
  width: 96%;
  margin: 2%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;
export const WritingName = styled.div`
  width: 40%;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 1.5rem;
`;
export const WritingAddress = styled.div`
  width: 40%;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 1.5rem;
`;
export const WritingButton = styled.button`
  width: 20%;
  box-sizing: border-box;
  border: 1px solid black;
  font-size: 1.5rem;
`;

export const WritingContent = styled.div`
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const BookMarkListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 70%;
  margin-left: 5%;
  margin-top: 2%;

  

`;

export const BookMarkItemDiv = styled.div`
  box-sizing: border-box;
  width: 22.2%;
  padding: 0.5%;
  margin: 1.4%;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
  }
`;

export const BookMarkImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1%;
  width: 86%;
`;

export const ReviewItemDiv = styled.div`
  width: 96%;
  margin: 2%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

export const ReviewName = styled.div`
  width: 80%;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 1.5rem;
`;

export const ReviewButton = styled.button`
  width: 20%;
  box-sizing: border-box;
  border: 1px solid black;
  font-size: 1.5rem;
`;

export const ReviewContent = styled.div`
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const RestaurantAddressDiv = styled.div`
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 22px;
  font-family: "NanumPen";
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

export const Title= styled.div`
display: flex;
flex-direction: column;
font-family: "Nanum";
margin-bottom: 4%;
width: 100%;
border-bottom: 3px solid #73B4AC;
font-size: 25px;
`