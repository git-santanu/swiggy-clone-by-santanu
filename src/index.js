import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Error from "./components/Error";
import Body from './components/Body';
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { 
        path: "/",
        element: <Body />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path:'/restaurants/:resId',
        element: <RestroMenu/>
      }
    ],
    errorElement: <Error />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
