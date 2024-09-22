import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import { NotFoundPage, BikesListPage, BikesFormPage } from "./lazyImports.js";
import { MoonLoader } from "react-spinners";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/bikes" />} />
      <Route
        path="bikes"
        element={
          <Suspense fallback={<MoonLoader />}>
            <BikesListPage />
          </Suspense>
        }
      />
      <Route
        path="add"
        element={
          <Suspense fallback={<MoonLoader />}>
            <BikesFormPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<MoonLoader />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export default router;
