import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../redux/Store";

export type RootState = ReturnType<typeof store.getState>;

const HotelList = () => {
    const dispatch = useDispatch();
  const search = useSelector((data: RootState) => data.search);
  const [dummyData, setDummyData] = useState([]);

  const getHotelData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant`, {}) 
      .then((res) => {
        setDummyData(res.data.data);
        dispatch({ type: "information", payload: res.data.data });
      })
      .catch(() => alert("호텔 정보를 불러올 수 없습니다."));
  };
  useEffect(getHotelData, []);

    return (
        <div>
            {search === ""
        ? dummyData.map(
            (
              el: { id: number; photo: [""]; name: ""; rating: 0; address: "" },
              key
            ) => (
              <div key={key}>
                <Link
                  to={`/restaurantinfo/${el.id}`}  //!호텔로 
                  style={{ textDecoration: "none" }}
                >
                  <img src={el.photo[0]} alt="호텔" />
                  <div>
                    <div>{el.name}</div>
                    <div>{el.rating}</div>
                  </div>
                  <div>{el.address}</div>
                </Link>
              </div>
            )
          )
        : dummyData
            .filter((val: { id: number; photo: [""]; name: ""; rating: 0; address: "" }) => {
              if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              } else if (
                val.address.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val: { id: number; photo: [""]; name: ""; rating: 0; address: "" }, key) => {
              return (
                <div key={key}>
                  <Link
                    to={`/restaurantinfo/${val.id}`} //!호텔로
                    style={{ textDecoration: "none" }}
                  >
                    <img src={val.photo[0]} alt="호텔" />
                    <div>
                      <div>{val.name}</div>
                      <div>{val.rating}</div>
                    </div>
                    <div>{val.address}</div>
                  </Link>
                </div>
              );
            })}
        </div>
    );
};

export default HotelList;