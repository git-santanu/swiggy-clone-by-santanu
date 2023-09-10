import React, { useState } from "react";
import Header from "./components/Header";
import userContext from "./utils/userContext";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //get the user details from API
    const data = {
      name: "Santanu Dutta",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}> 
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </>
  );
};

export default App;
