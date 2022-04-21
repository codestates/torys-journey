import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantDiv = styled.div`
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const RestaurantTab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  width: 50%;
  height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
  background-color: #73b4ac;
  border: 1px solid black;
  transition: 0.5s;
  /* &:focus {
    border: 3px solid #73b4ac;
    background: white;
  }*/
`;

export const RestaurantTab2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  width: 50%;
  height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
  background-color: white;
  border: 3px solid #73b4ac;
  transition: 0.5s;
  /* &:focus {
    border: 3px solid #73b4ac;
    background: white;
  } */
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
  width: 2%;
  position: relative;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    visibility: visible;
    color: black;
  }
`;

export const BookmarkNotice = styled.span`
  visibility: hidden;
  left: 11.5%;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
`;

export const ReviewWritingDiv = styled.div`
  display: flex;
  border-bottom: 3px solid #73b4ac;
`;

export const ReviewWritingTitleDiv = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 18px;
`;

export const ReviewWritingInput = styled.input`
  margin: 10px;
  width: 50%;
  padding-left: 10px;
  font-size: 1.1rem;

  /* border-radius: 2px; */
`;

export const ReviewWritingStar = styled.div`
  margin: 10px;
  font-size: 1.5rem;
`;

export const ReviewWritingButton = styled.button`
  margin: 10px;
  font-size: 1rem;
  background-color: rgba(127, 199, 191, 0.3);
  border-radius: 4px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
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
  & ${BookMarkDiv}:hover + ${BookmarkNotice} {
    visibility: visible;
  }
`;

export const Rating = styled.div`
  font-size: 15px;
`;

export const Div = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-right: 10px;
`;

export const CarouselButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 50px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Posted = styled.div`
  margin-left: 10px;
`;

export const TabMenu = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    ${"" /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}

    padding: 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
  }

  .focused {
    ${"" /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    padding: 17px;
    background-color: white;
    border: 3px solid #73b4ac;
  }

  & div.desc {
    text-align: center;
  }
`;

export const TabLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
  background-color: #73b4ac;
  margin-left: 0;
  box-sizing: content-box;
`;
