
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import dummyData from "../pages/TESTTESTTEST";

const DetailCarousel = () => {
  const picture = dummyData.map((el: any) => el.picture);
  console.log(picture[0])
  const images =picture[0].map((el:any) => {
	return {
		original: el ,
		thumbnail: el,
	}
});

  return <ImageGallery items={images} />;
};

export default DetailCarousel;
