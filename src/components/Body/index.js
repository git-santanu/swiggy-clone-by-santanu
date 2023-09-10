import React, { useState, useEffect, useContext } from "react";
import BodyCards from "../BodyCards";
import getData from "../../utils/api/getData";
import { useNavigate } from "react-router-dom";
import withPromotedCard from "../../utils/restraurant-helper";
import userContext from "../../utils/userContext";

const Index = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const router = useNavigate();

  const GetPromotedCards = withPromotedCard(BodyCards);

  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  const {loggedInUser, setUserName} = useContext(userContext)

  const fetchData = () => {
    const data = getData;
    setRestroList(data[0]?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(data[0]?.data?.cards[2]?.data?.data?.cards);
  };

  const topRatedRestroHandle = () => {
    const data = restroList.filter((i) => i.data.avgRating > 4);
    setFilteredRestro(data);
  };

  const searchRestroHandler = () => {
    const data = restroList.filter((i) => {
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

  const cardPressHandler = (cardItems) => {
    const { id, name, cuisines, costForTwoString } = cardItems?.data;
    router(`/restaurants/${id}`, {
      replace: true,
      state: { name, cuisines, costForTwoString },
    });
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
              placeholder="Search foods here"
              onChange={(e) => textChangeHandler(e)}
            />
            <button className="search-btn" onClick={searchRestroHandler}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={topRatedRestroHandle}>
            Top Rated Restraurants
          </button>
          <div className="search">
           <label style={{fontWeight:'bold'}}>User name: </label>
            <input
              type="text"
              className="search-box"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="card-container">
          {filteredRestro.map((card) => {
            return (
              <div onClick={() => cardPressHandler(card)} key={card.data.id}>
                {card.data.promoted ? (
                  <GetPromotedCards cardData={card}/>
                ) : (
                  <BodyCards cardData={card} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
