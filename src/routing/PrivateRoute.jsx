import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const getTokenFromLocalStorage = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;

  return getTokenFromLocalStorage?.token ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
