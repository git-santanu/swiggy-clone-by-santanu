import React, { useState } from "react";
import BodyCards from "../BodyCards";
import getData from "../../utils/api/getData";
import { useEffect } from "react";
import Shimmer from "../fakeCards";

const Index = () => {
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = () => {
    const data = getData;
    setRestroList(data[0]?.data?.cards[2]?.data?.data?.cards);
  };
  const topRatedRestroHandle = () => {
    const data = restroList.filter((i) => i.data.avgRating > 4);
    setRestroList(data);
  };

  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={topRatedRestroHandle}>
            Top Rated Restraurants
          </button>
        </div>
        <div className="card-container">
          {restroList.map((card, id) => {
            return <BodyCards key={card.data.id} cardData={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
