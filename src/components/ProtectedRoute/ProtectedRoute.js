import { Navigate } from "react-router";
import { checkToken } from "../../utils/auth";

// const ProtectedRoute = ({ check, children }) =>
//   !check ? <Navigate to='/login' /> : children;

export default RequireAuth;
function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = checkToken();

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
