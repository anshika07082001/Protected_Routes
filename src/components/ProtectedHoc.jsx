import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";

const ProtectedHoc = ({ children }) => {
  let context = useContextHook();
  let location = useLocation();
  //   condition checks whether user is login or not if not navigates to login page
  if (!(Object.keys(context.login).length > 0)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedHoc;
