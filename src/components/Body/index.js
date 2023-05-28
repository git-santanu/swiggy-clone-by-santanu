import React, { useState } from "react";
import BodyCards from "../BodyCards";
import cardItems from "../../utils/Api";
import getData from "../../utils/api/getData";
import { useEffect } from "react";
const Index = () => {
  const [restroList,setRestroList]= useState([]);

  useEffect(()=>{
    fetchData();
    return()=>{
      fetchData()
    }
  },[])

  const fetchData = ()=>{
    const data = getData
    setRestroList(data[0].data.cards[2].data.data.cards)
  }
  
  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>alert('fjj')}>Top Rated Restraurants</button>
        </div>
        <div className="card-container">
          {restroList.map((card, id) => {
            console.log(card)
            return <BodyCards key={card.data.id} cardData={card} />;
          })}
        </div>  
      </div>
    </>
  );
};

export default Index;
