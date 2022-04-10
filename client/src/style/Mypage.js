import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyPageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DeleteButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const MyPageMenuDiv = styled.div`
  width: 10%;
  margin-top: 1.5%;
`;

export const MyPageDeleteDiv = styled.div`
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
  width: 46%;
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  font-family: "Nanum";
  border-radius: 4px;
  background-color: rgba(253, 215, 190, 0.3);
`;
export const WritingName = styled.div`
  width: 85%;
  border-bottom: 2px solid black;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
`;
export const WritingAddress = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 1.2rem;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 5px;
`;
export const WritingButton = styled.button`
  width: 15%;
  font-size: 1rem;
  background-color: #fdd7be;
  &:hover {
    cursor: pointer;
  }
`;

export const WritingContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
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
  width: 17%;
  padding: 0.5%;
  margin: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  border-radius: 4px;
  &:hover {
    /* transform: scale(1.12); */
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
  box-sizing: border-box;
  width: 17%;
  padding: 0.5%;
  margin: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
  }
`;

export const ReviewName = styled.div`
  width: 83%;
  display: flex;
  margin-top: 10px;
  font-weight: bold;
  border-bottom: 2px double gray;
  box-sizing: border-box;
  font-size: 1.5rem;
`;

export const ReviewButton = styled.button`
  width: 17%;
  box-sizing: border-box;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ReviewContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 1.2rem;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const RestaurantAddressDiv = styled.div`
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 20px;
  font-family: "Nanum";
  margin-top: 10px;
`;

export const RestaurantNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
  margin-right: 1%;
  color: black;
  font-size: 25px;
  font-family: "Nanum_bold";
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nanum";
  height: 30px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 3px solid #73b4ac;
  font-size: 25px;
`;

export const PostPicture = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const StarDiv = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
  font-size: 1.2rem;
`;
