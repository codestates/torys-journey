import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../redux/Store";

export type RootState = ReturnType<typeof store.getState>;

type Props = {
  handlePostModal: () => void;
  address: any
};

const Post = ({ handlePostModal, address }: Props) => {
  console.log(address)
  const navigate = useNavigate();
  // const localId = useSelector((localId: RootState) => localId.Reducer.id);
  //서버에서 user id를 redux에 저장한 것을 여기로 꺼내오기.
  const localStorageTokenCheck: any = localStorage.getItem("KEY");
  const post = useSelector((data: RootState) => data.restaurantEnrollment);

  //!!!!!!!!!!!!!!   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const uri = address;
  // console.log(uri);
  const uploadPicutre = () => {
    if (uri) {
      axios.post(
        `${process.env.REACT_APP_API_URL}/restaurant/photo`,
        { uri },
        {
          headers: {
            "Content-Type": `multipart/form-data; `,
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      );
    }
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const handlePost = () => {
    if (post.name && post.address) {
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
              "Content-Type": `application/json`,
              authorization: `Bearer ${localStorageTokenCheck}`,
            },
            withCredentials: true,
          }
        )
        .then(() => alert("등록이 완료되었습니다."))
        .then(() => navigate("/restaurant"))
        // //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .then(() => uploadPicutre());
      //35번줄 조건에 사진을 넣어햐하나???
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    } else {
      alert("상호명과 주소는 필수입니다.");
    }
  };

  return (
    <div>
      <div>포스트를 등록하시겠습니까?</div>
      <button onClick={handlePost}>예</button>
      <button onClick={handlePostModal}>취소</button>
    </div>
  );
};

export default Post;
