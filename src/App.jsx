import React from "react";
import HeaderOne from "./Components/Home/HeaderOne";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <HeaderOne></HeaderOne>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
