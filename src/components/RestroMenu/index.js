import React from "react";
import {useLocation} from 'react-router-dom';
import useRestroMenu from "../../utils/useRestroMenu";

const RestroMenu = () => {
  const location = useLocation();
  const {name,cuisines,costForTwoString} = location.state;

  const menuInfo = useRestroMenu();  //using custom hook
  
  if (menuInfo === null) return <h2>No data found!</h2>;
  return (
    <div className="menu">
      <h2>Name of the Restaurant: {name} </h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoString}
      </h3>
      <ul>
        {menuInfo.map((item) => {
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
