import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import { NotFoundPage } from "../pages/NotFoundPage";
import BikesListPage from "../bike/pages/BikesListPage/BikesListPage.js";
import BikesFormPage from "../bike/pages/BikeFormPage/BikeFormPage.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/bikes" />} />
      <Route path="bikes" element={<BikesListPage />} />
      <Route path="add" element={<BikesFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
