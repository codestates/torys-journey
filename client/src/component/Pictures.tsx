import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import DetailCarousel from "./DetailCarousel";
import { Picture } from "../style/Picture";

const CardImg = styled.img`
  width: 96%;
  margin: 2%;
  height: 240px;
`;

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: #ffffff;
  }

  .slick-prev {
    left: 3%; /*위치*/
    z-index: 1;
  }

  .slick-next {
    right: 3%;
  }
`;

const Pictures = ({ picture }: any): React.ReactElement => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: picture.length > 5 ? 5 : picture.length,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      //반응형
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Picture>
      <StyledSlider {...settings}>
        {picture.map((el: string, key: React.Key | null | undefined) => {
          return (
            <div key={key}>
              <CardImg
                src={el}
                alt="사진을 업로드해주세요"
                onClick={() => {
                  onClick();
                }}
              />
            </div>
          );
        })}
      </StyledSlider>
      {modal ? <DetailCarousel onClick={onClick} photo={picture} /> : ""}
    </Picture>
  );
};

export default Pictures;
