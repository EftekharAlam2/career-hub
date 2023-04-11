import React from "react";
import HeaderOne from "./Components/Home/HeaderOne";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <HeaderOne></HeaderOne>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
