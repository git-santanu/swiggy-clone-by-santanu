import React from "react";
import img_url from "../../assests/constant";

const Index = ({
  cardData: {
    data: {
      name,
      cloudinaryImageId,
      avgRating,
      slaString,
      cuisines,
      costForTwoString,
    },
  },
}) => {
  return (
    <>
      <div className="card-wrap">
        <img className="card-img" src={img_url + cloudinaryImageId} alt="img" />
        <h3>{name}</h3>
        <h5>{cuisines[0]}</h5>
        <div className="card-bottom">
          <h6>{avgRating} stars</h6>
          <h6>{slaString}</h6>
          <h6>{costForTwoString}</h6>
        </div>
      </div>
    </>
  );
};

export default Index;
