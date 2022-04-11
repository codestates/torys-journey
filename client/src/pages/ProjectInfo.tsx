import React from "react";
import { MainDiv, InfoImg } from "../style/ProjectInfo";
import Img1 from "../style/info/01.jpeg";
import Img2 from "../style/info/02.jpeg";
import Img3 from "../style/info/03.jpeg";
import Img4 from "../style/info/04.jpeg";

const ProjectInfo = () => {
  return (
    <MainDiv>
      <InfoImg src={Img1} />
      <InfoImg src={Img2} />
      <InfoImg src={Img3} />
      <InfoImg src={Img4} />
    </MainDiv>
  );
};

export default ProjectInfo;
