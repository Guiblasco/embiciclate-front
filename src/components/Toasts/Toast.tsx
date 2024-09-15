import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
