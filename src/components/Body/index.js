import React from "react";
import BodyCards from "../BodyCards";
import cardItems from "../../utils/Api";
const index = () => {
  
  return (
    <>
      <div className="body">
        {/* <div className="search">Search</div> */}
        <div className="card-container">
          {cardItems.map((card, id) => {
            return (
                <BodyCards key={card.id} cardName={card.name} image={card.image}/>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default index;
