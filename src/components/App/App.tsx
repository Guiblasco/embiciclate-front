import React from "react";
import "./App.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
