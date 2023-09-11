import React, { useState } from "react";
import Header from "./components/Header";
import userContext from "./utils/userContext";
import appStore from "./utils/store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";

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
      <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="App">
            <Header />
            <Outlet />
          </div>
        </userContext.Provider>
      </Provider>
    </>
  );
};

export default App;
