import React, { useState, useEffect } from "react";
import BodyCards from "../BodyCards";
import getData from "../../utils/api/getData";
import { Link } from "react-router-dom";
// import Shimmer from "../fakeCards";

const Index = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = () => {
    const data = getData;
    setRestroList(data[0]?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(data[0]?.data?.cards[2]?.data?.data?.cards);
  };

  const topRatedRestroHandle = () => {
    const data = restroList.filter(i => i.data.avgRating > 4);
    setFilteredRestro(data);
  };
  const searchRestroHandler = () => {
    const data = restroList.filter(i => {
      return i.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestro(data);
  };
  const textChangeHandler = (e) => {
    const searchData = e.target.value;
    let data = getData;
    if (searchData.length === 0) {
      setFilteredRestro(data[0]?.data?.cards[2]?.data?.data?.cards);
    }
    setSearchText(e.target.value);
  };
  return filteredRestro.length === 0 ? (
    <h3>Data not found...!</h3>
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              name="searchText"
              value={searchText}
              onChange={(e) => textChangeHandler(e)}
            />
            <button className="serach-btn" onClick={searchRestroHandler}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={topRatedRestroHandle}>
            Top Rated Restraurants
          </button>
        </div>
        <div className="card-container">
          {filteredRestro.map((card, index) => {
            return <Link key={card.data.id} to={'/restaurants/'+ card.data.id}> <BodyCards cardData={card} /></Link>;
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
