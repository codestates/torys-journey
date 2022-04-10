import React from "react";
import {
  BookMarkItemDiv,
  BookMarkImg,
  DeleteButtonDiv,
  RestaurantAddressDiv,
  RestaurantNameDiv,
  BookmarkDiv,
} from "../style/Mypage";
import { ButtonDelete } from "../style/Modal";
import { Link } from "react-router-dom";
import DeleteBookMark from "../modal/DeleteBookMark";

type ElProps = {
  el: { id: string; photo: [string]; name: string; address: string };
  handleMadalDeleteBookMark: () => void;
  deleteBookMark: boolean;
};
const DeleteModal = ({
  el,
  handleMadalDeleteBookMark,
  deleteBookMark,
}: ElProps) => {
  return (
      <div>
    <div>
      <BookmarkDiv>
        <Link
          to={`/restaurantinfo/${el.id}`}
          style={{ textDecoration: "none" }}
        >
          <BookMarkImg src={el.photo[0]} alt="사진을 넣어주세요." />
          <RestaurantNameDiv>
            <div>{el.name}</div>
          </RestaurantNameDiv>
          <RestaurantAddressDiv>{el.address}</RestaurantAddressDiv>
        </Link>

        <DeleteButtonDiv>
          <ButtonDelete onClick={handleMadalDeleteBookMark}>
            삭제하기
          </ButtonDelete>
        </DeleteButtonDiv>
      </BookmarkDiv>
      
    </div>{deleteBookMark ? (
        <DeleteBookMark
          handleMadalDeleteBookMark={handleMadalDeleteBookMark}
          bookMarkData={el}
        />
      ) : (
        ""
      )}
  </div>);
};

export default DeleteModal;
