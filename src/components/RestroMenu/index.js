import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useRestroMenu from "../../utils/useRestroMenu";
import useRestroCategories from "../../utils/useRestroCategories";
import RestroCategoryAcordian from "../RestroCategoryAcordian.js";

const RestroMenu = () => {
  const location = useLocation();
  const { name, cuisines, costForTwoString } = location.state;
  const [showIndex, setShowIndex] = useState(null);

  const menuInfo = useRestroMenu(); //using custom hook
  const restroCategories = useRestroCategories(); //using custom hook

  const getCategories = restroCategories.filter(
    (category) =>
      category.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Function to toggle the card when it's clicked
  // const toggleCard = (index) => {
  //   if (showIndex === index) {
  //     setShowIndex(null); // Close the currently open card if it's clicked again
  //   } else {
  //     setShowIndex(index); // Open the clicked card
  //   }
  // };

  if (menuInfo.length <= 0) return <h2>No data found!</h2>;
  return (
    <div className="menu">
      <h2 className="menu-restro-name">{name} </h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoString}
      </h3>
      {getCategories.map((category, index) => (
        //controlled component
        <RestroCategoryAcordian
          key={index}
          data={category?.card?.card}
          isHeaderClicked={index === showIndex ? true : false} // lifting state up
          setShowIndex={() => setShowIndex(index)} // lifting state up
          // toggleCard={() => toggleCard(index)} // lifting state up
        />
      ))}
    </div>
  );
};
export default RestroMenu;
