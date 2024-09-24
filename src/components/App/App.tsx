import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </main>
    </div>
  );
};

export default App;
