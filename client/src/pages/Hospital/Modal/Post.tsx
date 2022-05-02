import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../../redux/Store";
export type RootState = ReturnType<typeof store.getState>;
type props = {
    handlePostModal: () => void;
    selected: string[] | undefined;
  };
const Post = ({ selected, handlePostModal }:props) => {

  const navigate = useNavigate();
  const hospitalInfo = useSelector(
    (data: RootState) => data.hospitalEnrollment
  );
  
  const localStorageTokenCheck: any = localStorage.getItem("KEY");

  const url = selected;
  const handlePost = () => {
    if (hospitalInfo.name && hospitalInfo.address && url) {
      let hospitalId: number;
      let { name, address, phoneNumber, officeHours, detailInfo } =
        hospitalInfo;
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/hospital`,
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
        .then((res) => {
          console.log(res.data.data);
          hospitalId = res.data.data.id;
        })
        .then(() => {
          uploadPicture(hospitalId);
        })
        .then(() => {
          navigate("/restaurant");
        });
    } else {
      alert("상호명과 주소와 사진은 필수입니다.");
    }
  };
  const uploadPicture = (hospitalId: number) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/hospital/${hospitalId}/photo`,
        { url: url },
        {
          headers: {
            authorization: `Bearer ${localStorageTokenCheck}`,
          },
        }
      )
      .then(() => alert("등록이 완료되었습니다"))
      .catch(() => alert("등록에 실패하였습니다."));
  };
  return (
    <div>
      <div>포스트를 등록하시겠습니까?</div>
      <button onClick={handlePost}>네</button>
      <button onClick={handlePostModal}>취소</button>
    </div>
  );
};

export default Post;
