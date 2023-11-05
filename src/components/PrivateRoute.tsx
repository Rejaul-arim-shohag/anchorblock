import React from "react";
import { useSelector } from "react-redux";
import { Navigate, RouteProps } from "react-router-dom";
import { RootState } from "../redux/store";

type PrivateRouteProps = {
  element: React.ReactElement;
} & Omit<RouteProps, 'element'>;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return React.cloneElement(element, rest);
};

export default PrivateRoute;