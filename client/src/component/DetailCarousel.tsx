import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import dummyData from "../pages/TESTTESTTEST";
import { useParams } from "react-router-dom";
import { ImgModal } from "../style/RestaurantInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type onClickProps = {
  onClick: () => void;
};

const DetailCarousel = ({ onClick }: onClickProps) => {

  const params= useParams<string>()
  const picture = dummyData.map((el: any) => el.picture);
  console.log(picture[Number(`${params}`)])
  console.log(picture[Number(params.id)])
  const images =picture[Number(params.id)-1].map((el:any) => {
    return {
      original: el, //큰사진
      originalHeight: 700,

      thumbnail: el, //작은사진
      thumbnailHeight: 100,
    };
  }); 


  return (
    <ImgModal>
      <button>
        <FontAwesomeIcon onClick={onClick} icon={faTimes} />
      </button>
      <ImageGallery items={images} />;
    </ImgModal>
  );
};

export default DetailCarousel;
