import { useState, useEffect } from "react";
import fetchMenus from "./api/fetchMenus";

const useRestroCategories = () => {
  const [restroCategories, setRestroCategories] = useState([]);

  useEffect(() => {
    getItemList();
  }, []);

  const getItemList = () => {
    const data = fetchMenus;
    const findMenuItems =
      data[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setRestroCategories(findMenuItems);
  };
  return restroCategories;
};
export default useRestroCategories;
