import { toast } from "react-toastify";

export const deleteBikeError = (error: Error) => {
  toast.error(`Ha ocurrido un error al borrar la bici: ${error.message}`, {
    position: "bottom-center",
    theme: "colored",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
  });
};

export const deleteBikeSuccess = () => {
  toast.success(`Bici borrada con éxito!`, {
    position: "bottom-center",
    theme: "colored",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
  });
};
