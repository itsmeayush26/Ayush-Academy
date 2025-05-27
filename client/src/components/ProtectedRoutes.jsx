//there will be 3 Protected routes
// login
// Admin login
// student login

import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
export const AuthenticatedUser = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  if (isAuthenticated) {
  }
  return children;
};
export const AdminRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (user.role !== "instructor") {
    return <Navigate to="/" />;
  }
  return children;
};
