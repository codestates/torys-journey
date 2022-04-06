import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../redux/Store";

export type RootState = ReturnType<typeof store.getState>;

const Post = (props: any) => {
  const navigate = useNavigate();

  const localStorageTokenCheck: any = localStorage.getItem("KEY");
  const post = useSelector((data: RootState) => data.restaurantEnrollment);

  const uri = props.address; //사진 올린 것 주소 받아오기
  const [restaurantId, setRestaurantId] = useState<number>();
  const handlePost = () => {
    if (post.name && post.address && uri) {
      let { name, address, phoneNumber, officeHours, detailInfo } = post;
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/restaurant`,
          {
            name,
            address,
            phoneNumber,
            officeHours,
            detailInfo,
          },
          {
            headers: {
              authorization: `Bearer ${localStorageTokenCheck}`,
            },
          }
        )
        .then((res) => setRestaurantId(res.data.id))
        .then(() => uploadPicture);
    } else {
      alert("상호명과 주소와 사진은 필수입니다.");
    }
  };
  const uploadPicture = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/restaurant/${restaurantId}/photo`,
        { uri: uri },
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("등록이 완료되었습니다"))
      .then(() => navigate("/mypage/writingmanage"))
      .catch(() => alert("등록에 실패하였습니다."));
  };

  return (
    <div>
      <div>포스트를 등록하시겠습니까?</div>
      <button onClick={handlePost}>예</button>
      <button onClick={props.handlePostModal}>취소</button>
    </div>
  );
};

export default Post;
