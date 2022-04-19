import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import store from "../redux/Store";
import {
  ModalBack,
  PostModal,
  Header,
  Content,
  ButtonDiv,
} from "../style/Modal";

export type RootState = ReturnType<typeof store.getState>;

type Props = {
  handlePostModal: () => void;
  pictureAddress: [] | undefined;
};

const Post = (props: Props) => {
  const navigate = useNavigate();

  const localStorageTokenCheck: any = localStorage.getItem("KEY");
  const post = useSelector((data: RootState) => data.restaurantEnrollment);

  const uri = props.pictureAddress; //사진 올린 것 주소 받아오기
  // const [restaurantId, setRestaurantId] = useState<number>();

  const handlePost = () => {
    if (post.name && post.address && uri) {
      let restaurantId: number;
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
        .then((res) => {
          console.log(res.data.data);
          restaurantId = res.data.data.id;
        })
        .then(() => {
          uploadPicture(restaurantId);
        })
        .then(() => {
          navigate("/restaurant");
        });
    } else {
      alert("상호명과 주소와 사진은 필수입니다.");
    }
  };
  const uploadPicture = (restaurantId: number) => {
    console.log(uri);

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
      // .then(() => navigate("/mypage/writingmanage"))
      .catch(() => alert("등록에 실패하였습니다."));
  };

  return (
    <ModalBack>
      <PostModal>
        <Header>
          <div>Tory's-journey</div>

          <FontAwesomeIcon onClick={props.handlePostModal} icon={faTimes} />
        </Header>
        <Content>
          <div>포스트를 등록하시겠습니까?</div>
        </Content>
        <ButtonDiv>
          <button onClick={handlePost}>예</button>
          <button onClick={props.handlePostModal}>취소</button>
        </ButtonDiv>
      </PostModal>
    </ModalBack>
  );
};

export default Post;
