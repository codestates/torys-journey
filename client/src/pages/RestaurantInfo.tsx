import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //params를 확인하는 것
import axios from "axios";
import Pictures from "../component/Pictures";
import Info from "../component/Info";
import Map from "../component/Map";
import BookMarkCheck from "../component/BookMarkCheck";
import { RestaurantDiv, RestaurantMainDiv } from "../style/RestaurantInfo";

const RestaurantInfo = () => {
  const params = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState({
    id: 0,
    name: "",
    photo: [""],
    rating: 0,
    address: "",
    number: "",
    detailInfo: "",
    officeHours: "",
  });

  const getRestaurantInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/${params.id}`, {})
      .then((res) => {
        // console.log(res.data.data);
        setRestaurantInfo(res.data.data);
      })
      .catch(() => alert("불러오기를 실패하였습니다."));
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return (
    <RestaurantMainDiv>
      <h1>{restaurantInfo.name}</h1>
      <Pictures picture={restaurantInfo.photo} />
      <BookMarkCheck />
      <RestaurantDiv>
        <Info />
        <Map address={restaurantInfo.address} name={restaurantInfo.name} />
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default RestaurantInfo;
