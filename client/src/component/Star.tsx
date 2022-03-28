import React, { ReactElement, useState } from "react";
import { FaStar } from "react-icons/fa";

const Star: React.FC = (): ReactElement => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [rating, setRating]= useState<number>(0)
  const handleStarClick = (e:any, index:number) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
    setRating(index+1)
   
  
  };

  return (
    <div>
      <FaStar
        onClick={(e) => handleStarClick(e, 0)}
        color= {clicked[0] ? "gold": "gray"}
      />
      <FaStar
        onClick={(e) => handleStarClick(e, 1)}
        color={clicked[1] ? "gold" : "gray"}
      />
      <FaStar
        onClick={(e) => handleStarClick(e, 2)}
        color={clicked[2] ? "gold": "gray"}
      />
      <FaStar
        onClick={(e) => handleStarClick(e, 3)}
        color={clicked[3] ? "gold": "gray"}
      />
       <FaStar
        onClick={(e) => handleStarClick(e, 4)}
        color={clicked[4] ? "gold": "gray"}
      />
      평점:{rating}

    </div>
  );
};

export default Star;
