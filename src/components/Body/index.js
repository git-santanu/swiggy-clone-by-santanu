import React from "react";
import BodyCards from "../BodyCards";
import cardItems from "../../utils/Api";
const index = () => {
  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" >Top Rated Restraurants</button>
        </div>
        <div className="card-container">
          {cardItems.map((card, id) => {
            return <BodyCards key={card.id} cardData={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default index;
