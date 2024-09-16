import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
