import React from "react";
import { useState, useEffect } from "react";
import fetchMenus from "../../utils/api/fetchMenus";

const RestroMenu = () => {

  const [menuInfo, setMenuInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenusList();
  }, []);

  const getMenusList = () => {
    const data = fetchMenus;
    setMenuInfo(data);
    const findMenuItems = data[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;
    const menuData_ = findMenuItems.map(item => {return item.card.info});
    setMenuItems(menuData_);
  };

  if (menuInfo === null) return <h2>No data found!</h2>;

  const { name, cuisines, costForTwoMessage } = menuInfo[0]?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h2>Name of the Restaurant: {name} </h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {menuItems.map((item) => {
          const { id, name } = item;
          return (
            <div key={id}>
              <li>{name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestroMenu;
