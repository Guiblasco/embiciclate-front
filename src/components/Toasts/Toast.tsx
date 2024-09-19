import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = (): React.ReactElement => {
  const notify = () => {
    toast.error("", {
      position: "top-center",
    });
  };

  return (
    <div>
      <button hidden={true} onClick={notify}>
        Notificame
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
