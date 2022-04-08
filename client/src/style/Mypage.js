import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyPageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MyPageMenuDiv = styled.div`
  width: 10%;
`;
export const MyPageInfo = styled.div`
  margin-left: 10%;
  display: flex;
  border: 3px solid gold;
  flex-direction: column;
  width: 50%;
`;

export const MypageInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
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
  width: 86%;
  margin-left: 3%;
`;

export const BookMarkItemDiv = styled.div`
  width: 30%;
  margin: 1%;
`;

export const RestaurantImg = styled.img`
  width: 100%;
  height: 300px;
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
