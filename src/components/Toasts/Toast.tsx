import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Toast() {
  const notify = () => {
    toast.error("", {
      position: "top-center",
    });
  };

  return (
    <div>
      <button hidden={true} onClick={notify}></button>

      <ToastContainer />
    </div>
  );
}

export default Toast;
