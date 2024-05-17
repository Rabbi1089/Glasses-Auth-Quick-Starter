import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  console.log(loading);
  //where user was before click on private route location


  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  if (loading) {
    return <h1 className=" text-6xl font-bold text-center text-cyan-500">loading......</h1>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
