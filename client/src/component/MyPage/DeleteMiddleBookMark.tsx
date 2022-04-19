import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  BookMarkItemDiv,
  BookMarkImg,
  DeleteButtonDiv,
  RestaurantAddressDiv,
  RestaurantNameDiv,
} from "../../style/Mypage";
import { ButtonDelete } from "../../style/Modal";

import DeleteBookMark from "../../modal/BookMark/DeleteBookMark";

type BookMarkDataProps = {
  bookMarkDatas: { id: string; photo: [string]; name: string; address: string };
  //   handleModalDeleteBookMark: () => void;
  //   deleteBookMark: boolean;
};

const DeleteMiddleBookMark = ({
  bookMarkDatas,
}: //   handleModalDeleteBookMark,
//   deleteBookMark,
BookMarkDataProps) => {
  const [deleteBookMark, setDeleteBookMark] = useState<boolean>(false);
  const handleModalDeleteBookMark = () => {
    setDeleteBookMark(!deleteBookMark);
  };

  return (
    <BookMarkItemDiv>
      <DeleteButtonDiv>
        <ButtonDelete onClick={handleModalDeleteBookMark}>
          삭제하기
        </ButtonDelete>
      </DeleteButtonDiv>
      <Link
        to={`/restaurantinfo/${bookMarkDatas.id}`}
        style={{ textDecoration: "none" }}
      >
        <BookMarkImg src={bookMarkDatas.photo[0]} alt="사진을 넣어주세요." />
        <RestaurantNameDiv>
          <div>{bookMarkDatas.name}</div>
        </RestaurantNameDiv>
        <RestaurantAddressDiv>{bookMarkDatas.address}</RestaurantAddressDiv>
      </Link>

      {deleteBookMark ? (
        <DeleteBookMark
          handleModalDeleteBookMark={handleModalDeleteBookMark}
          bookMarkData={bookMarkDatas}
        />
      ) : (
        ""
      )}
    </BookMarkItemDiv>
  );
};

export default DeleteMiddleBookMark;

// {deleteBookMark ? (
//     <DeleteBookMark
//       handleModalDeleteBookMark={handleModalDeleteBookMark}
//       bookMarkData={el}
//     />
//   ) : (
//     ""
//   )}
