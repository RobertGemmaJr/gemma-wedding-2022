import { createBrowserRouter } from "react-router-dom";

import { ErrorLayout } from "@components/layout";

// Routes
import IndexRoute from "@src/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexRoute />,
    errorElement: <ErrorLayout />,
  },
]);
