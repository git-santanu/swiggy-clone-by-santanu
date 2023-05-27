import React, { useState } from "react";

const Index = ({ cardData: { cardName, image, rating } }) => {
  // const [filterRating,setFilterRating] = useState({rating})
  // console.log(filterRating)
  return (
    <>
      <div className="card-wrap">
        <img className="card-img" src={image} alt="abc" />
        <h3>{cardName}</h3>
        <h5>Desserts, Ice Cream</h5>
        <div className="card-bottom">
          <h6>{rating} stars</h6>
          <h6>37 mins</h6>
          <h6>300/- for two</h6>
        </div>
      </div>
    </>
  );
};

export default Index;
