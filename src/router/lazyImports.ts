import { lazy } from "react";

export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

export const BikesListPage = lazy(
  () => import("../bike/pages/BikesListPage/BikesListPage"),
);

export const BikesFormPage = lazy(
  () => import("../bike/pages/BikeFormPage/BikeFormPage"),
);
