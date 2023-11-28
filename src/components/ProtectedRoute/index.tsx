import { Navigate } from "react-router-dom";
import { LoginResponse } from "../../types/auth";

interface ProtecttedRouteProps {
  user: LoginResponse | undefined;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtecttedRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children as React.ReactElement;
};

export default ProtectedRoute;
