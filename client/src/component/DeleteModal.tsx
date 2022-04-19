import React from "react";
import {
  BookMarkImg,
  DeleteButtonDiv,
  RestaurantAddressDiv,
  RestaurantNameDiv,
  BookmarkDiv,
} from "../style/Mypage";
import { ButtonDelete } from "../style/Modal";
import { Link } from "react-router-dom";
import DeleteBookMark from "../modal/BookMark/DeleteBookMark";

type ElProps = {
  el: { id: string; photo: [string]; name: string; address: string };
  handleModalDeleteBookMark: () => void;
  deleteBookMark: boolean;
};
const DeleteModal = ({
  el,
  handleModalDeleteBookMark,
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
            <ButtonDelete onClick={handleModalDeleteBookMark}>
              삭제하기
            </ButtonDelete>
          </DeleteButtonDiv>
        </BookmarkDiv>
      </div>
      {deleteBookMark ? (
        <DeleteBookMark
          handleModalDeleteBookMark={handleModalDeleteBookMark}
          bookMarkData={el}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default DeleteModal;
