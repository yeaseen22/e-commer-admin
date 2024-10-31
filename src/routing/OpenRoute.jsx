import { Navigate } from "react-router-dom";

export const OpenRoute = ({ children }) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const getTokenFromLocalStorage = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;

  return getTokenFromLocalStorage?.token ? (
    <Navigate to="/admin" replace={true} />
  ) : (
    children
  );
};
