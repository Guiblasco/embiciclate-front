import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import { NotFoundPage } from "../pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
