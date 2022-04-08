import React, { useState } from "react";
import axios from "axios";
import ReviewChangeModalOnModal from "./ReviewChangeModalOnModal";
import ReviewDeleteModalOnModal from "./ReviewDeleteModalOnModal";
import { useNavigate } from "react-router-dom";

type ReviewChangeProps = {
  //!레스토랑ID가 없음
  ReviewChange: {
    reviewId: number;
    restaurantId: number;
    name: string;
    rating: number;
    comment: string;
  };
  ReviewChangeModal: () => void;
};

const ReviewChange = ({
  ReviewChange,
  ReviewChangeModal,
}: ReviewChangeProps) => {
  const navigate = useNavigate();

  const localStorageTokenCheck: string | null = localStorage.getItem("KEY");
  const [modal, setModal] = useState(false); // 포스트 등록 누를 시 나오는 모달 state
  const [modalDelete, setModalDelete] = useState(false); // 포스트 삭제 누를 시 나오는 모달 state

  const [value, setValue] = useState({
    //!레스토랑ID가 없음
    comment: ReviewChange.comment,
  }); //수정하는 input value를 넣는 state

  const changeReview = (target: string) => (e: { target: { value: any } }) => {
    setValue({ ...value, [target]: e.target.value });
  }; //포스트 수정 input value 관리 state

  const modalChange = () => {
    setModal(!modal);
  }; //포스트 수정 모달 state

  const modalDeleteChange = () => {
    setModalDelete(!modalDelete); //포스트 삭제 모달 state
  };

  //! 서버에 수정 요청
  const patchReview = () => {
    const { comment } = value; //레스토랑ID가 없음
    if (comment) {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/restaurant/${ReviewChange.restaurantId}/review/${ReviewChange.reviewId}`,
          //!레스토랑ID가 없음
          {
            comment: comment,
          },
          {
            headers: {
              authorization: `Bearer ${localStorageTokenCheck}`,
            },
          }
        )
        .then(() => alert("수정이 완료되었습니다."))
        .then(() => navigate("/"))
        .catch((res) => {
          if (res.response.status === 401)
            alert("리뷰를 수정할 수 있는 권한이 없습니다."); //오류 status에 따른 alert
        });
    } else {
      alert("내용 입력은 필수입니다.");
    }
    // reponse 응답에 따라 다르게 반응하는 방법 찾아보고 구현하기
  };

  //! 서버에 삭제 요청
  const deleteReview = () => {
    axios
      .delete(
        //! 레스토랑Id가 없음
        `${process.env.REACT_APP_API_URL}/restaurant/${ReviewChange.restaurantId}/review/${ReviewChange.reviewId}`,
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("삭제가 완료되었습니다."))
      .then(() => navigate("/"))
      .catch(() => alert("삭제할 수 있는 권한이 없습니다."));
  };

  //input에 넣고
  //수정 요청

  return (
    <div>
      <div>리뷰 수정</div>
      <br />
      <div>{ReviewChange.name}</div>
      <br />
      <div>{ReviewChange.rating}</div>
      {/* 디자인 꾸며야할듯 (별을 넣는 구조로???) */}
      <br />
      <input
        type="text"
        value={value.comment}
        onChange={changeReview("comment")}
      />
      <br />
      <button onClick={modalChange}>리뷰 수정</button>
      <button onClick={modalDeleteChange}>리뷰 삭제</button>
      <button onClick={ReviewChangeModal}>취소</button>
      {modal ? (
        <ReviewChangeModalOnModal
          modalChange={modalChange}
          patchReview={patchReview}
        />
      ) : (
        ""
      )}
      {modalDelete ? (
        <ReviewDeleteModalOnModal
          modalDeleteChange={modalDeleteChange}
          deleteReview={deleteReview}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ReviewChange;
