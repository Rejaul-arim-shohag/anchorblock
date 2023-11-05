import React from "react";
import { Navigate, RouteProps } from "react-router-dom";

type PrivateRouteProps = {
  element: React.ReactElement;
} & Omit<RouteProps, 'element'>;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return React.cloneElement(element, rest);
};

export default PrivateRoute;