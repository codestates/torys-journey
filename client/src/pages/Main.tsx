import React from "react";
import { Link } from "react-router-dom";
import store from "../redux/Store";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.

const Main = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link to="/hotel">Hotel</Link>
        </li>
        <li>
          <Link to="/hospital">Hospital</Link>
        </li>
        <li>
          <Link to="/park">Park</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
