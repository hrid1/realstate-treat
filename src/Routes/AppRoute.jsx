import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage/RootPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Favorite from "../pages/Favorite/Favorite";
import PrivateRoutes from "./PrivateRoutes";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home/:hid",
        element: <HomeDetails></HomeDetails>,
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoutes>
            <Favorite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
