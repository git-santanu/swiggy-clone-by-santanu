import React, { useState } from "react";
import img_url from "../../assests/constant";

const Index = ({cardData:{data: { name, cloudinaryImageId, avgRating }}}) => {
  return (
    <>
      <div className="card-wrap">
        <img className="card-img"
         src={img_url + cloudinaryImageId}
         alt="abc" />
        <h3>{name}</h3>
        <h5>Desserts, Ice Cream</h5>
        <div className="card-bottom">
          <h6>{avgRating} stars</h6>
          <h6>37 mins</h6>
          <h6>300/- for two</h6>
        </div>
      </div>
    </>
  );
};

export default Index;
