import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import DetailCarousel from "./DetailCarousel";

const CardImg = styled.img`
  width: 300px;
  height: 190px;
`;

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: blue;
  }

  .slick-prev {
    left: 3%; /*위치*/
    z-index: 999;
  }

  .slick-next {
    right: 3%;
  }
`;

const Pictures = ({ picture }: any): React.ReactElement => {
  // console.log(picture);
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
    // console.log(modal);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div>
      <StyledSlider {...settings}>
        {picture.map((el: any) => {
          return (
            <div>
              <CardImg
                src={el}
                alt="사진을 업로드해주세요"
                onClick={() => {onClick()}}
              />
              
            </div>
          );
        })}
      </StyledSlider>{modal === true ? <DetailCarousel /> : ""}
    </div>
  );
};

export default Pictures;
