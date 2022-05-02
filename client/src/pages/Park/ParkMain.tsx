import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../component/Search';
import MyLocation from '../../modal/MyLocation';
import { ButtonDiv, Header, ParkMainDiv } from '../../style/Park';
import ParkList from './Component/ParkList';

const ParkMain = () => {
  const [clicked, setClicked]= useState(false)
  const handleMap=()=>{
    setClicked(!clicked)
  }
  return (
    <ParkMainDiv>
      <div>
        <SearchBar />
        <div>
          <div onClick={handleMap}>내 주변 검색</div>
          <Link to="add"><div> 공원등록 </div></Link>
          
      </div></div>
      {clicked ? <MyLocation /> : ""}
      <ParkList/>
    </ParkMainDiv>
  );
};

export default ParkMain;