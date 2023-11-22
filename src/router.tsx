import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage.tsx";

// Routes
import Root from "@src/routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
