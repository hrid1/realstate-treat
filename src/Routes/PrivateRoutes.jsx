import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvier/AuthProvider";
import Login from "../pages/Login/Login";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../components/common/Spiner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spiner></Spiner>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
