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
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 70%;
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 0;
`;
export const WritingItemDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;
export const WritingName = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  box-sizing: border-box;
  font-size: 22px;
  font-family: "Nanum_bold";
  border-bottom: 2px double gray;
`;
export const WritingAddress = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  /* box-sizing: border-box; */
  font-size: 18px;
  font-family: "Nanum";
  margin-top: 5px;
`;
export const WritingButton = styled.button`
  width: 15%;
  /* box-sizing: border-box; */
  /* border: 1px solid black; */
  font-size: 1rem;
  font-family: "Nanum";
  &:hover {
    cursor: pointer;
  }
`;

export const WritingContent = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  box-sizing: border-box;
  font-family: "Nanum";
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
  width: 16%;
  padding: 0.5%;
  margin: 1.4%;
  margin-left: 37px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition: 0.3s;
  border-radius: 4px;
  margin-top: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export const BookMarkImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 70%;
  margin-left: 5%;
  margin-top: 2%;
`;

export const ReviewItemDiv = styled.div`
  width: 40%;
  margin: 1%;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
  flex-wrap: wrap;
  font-family: "nanum";
`;

export const ReviewName = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px double gray;
`;

export const ReviewButton = styled.button`
  width: 14%;
  /* height: 30px; */
  margin-top: 10px;

  margin-bottom: 10px;
  align-items: right;
  font-size: 12px;
  float:right &:hover {
    cursor: pointer;
  }
`;

export const ReviewContent = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  font-size: 15px;

  padding-top: 10px;
  float: left;
`;

export const ContentContainer = styled.div`
  width: 40%;
  border-bottom: 2px solid #a1a1a1;
  margin-top: 10px;
  background-color: rgba(250, 183, 77, 0.1);
`;

export const RestaurantAddressDiv = styled.div`
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 15px;
  font-family: "Nanum";
  margin-top: 10px;
`;

export const RestaurantNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 20px;
  font-family: "Nanum_bold";
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nanum";
  height: 30px;
  width: 100%;
  border-bottom: 3px solid #73b4ac;
  font-size: 25px;
  margin-bottom: 50px;
`;

export const NameContainer = styled.div`
  flex-direction: row;
  display: flex;
`;
export const PostPicture = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DeleteButton = styled.button`
  margin-top: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const ReviewContainer = styled.div`
  background-color: orange;
`;

export const ReviewButton2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
