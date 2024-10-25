import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage/RootPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
