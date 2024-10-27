import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvier/AuthProvider";
import Login from "../pages/Login/Login";
import { Navigate } from "react-router-dom";
import Spiner from "../components/common/Spiner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spiner></Spiner>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
