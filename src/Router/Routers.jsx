import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layout/PrimaryLayout";
import Errorpage from "../Error/Errorpage";
import Home from "../Pages/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
