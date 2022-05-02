import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../../redux/Store";
export type RootState = ReturnType<typeof store.getState>;

type Props = {
  handlePostModal: () => void;
  pictureAddress: [] | undefined;
};
const Post = (props: Props) => {
  const navigate = useNavigate();
  const localStorageTokenCheck: any = localStorage.getItem("KEY");
  const post = useSelector((data: RootState) => data.parkEnrollment);
  const uri = props.pictureAddress; //사진 올린 것 주소 받아오기

  const handlePost = () => {
    if (post.name && post.address && uri) {
      let parkId: number;
      let { name, address, phoneNumber, officeHours, detailInfo } = post;
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/park`,
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
          parkId = res.data.data.id;
        })
        .then(() => {
          uploadPicture(parkId);
        })
        .then(() => {
          navigate("/park");
        });
    } else {
      alert("상호명과 주소와 사진은 필수입니다.");
    }
  };
  const uploadPicture = (parkId: number) => {
    console.log(uri);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/park/${parkId}/photo`,
        { uri: uri },
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
      <div>
        <div>
          <div>포스트를 등록하시겠습니까?</div>
          <div>
            <button onClick={handlePost}>예</button>
            <button onClick={props.handlePostModal}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
