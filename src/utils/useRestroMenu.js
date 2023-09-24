import { useState, useEffect } from "react";
import fetchMenus from "../utils/api/fetchMenus";

const useRestroMenu = () => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenusList();
  }, []);

  const getMenusList = () => {
    const data = fetchMenus;
    const findMenuItems =
      data[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards;
    const menuData_ = findMenuItems.map((item) => {
      return item.card.info;
    });
    setMenuItems(menuData_);
  };
  return menuItems;
};
export default useRestroMenu;
