
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import dummyData from "../pages/TESTTESTTEST";
import { useParams } from "react-router-dom";

const DetailCarousel = () => {
  const params= useParams<string>()
  const picture = dummyData.map((el: any) => el.picture);
  console.log(picture[Number(`${params}`)])
  console.log(picture[Number(params.id)])
  const images =picture[Number(params.id)-1].map((el:any) => {
	return {
		original: el ,
		thumbnail: el,
	}
});

  return <ImageGallery items={images} />;
};

export default DetailCarousel;
