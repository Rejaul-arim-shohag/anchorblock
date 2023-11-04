import React from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ComponentType;
} & RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;