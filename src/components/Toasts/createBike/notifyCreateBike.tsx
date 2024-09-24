import { toast } from "react-toastify";

export const createBikeError = (error: Error) => {
  toast.error(`Ha ocurrido un error al crear la bici: ${error.message}`, {
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

export const createBikeSuccess = () => {
  toast.success(`Éxito al crear la bici!`, {
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
