import { Navigate } from "react-router-dom";
import { getUserInfo } from "../../utils/helpers";

export default function AuthLayout({ children, isPublic }) {
  const userInfo = getUserInfo();

  if (isPublic && userInfo) {
    return <Navigate to="/" replace />;
  }

  if (!isPublic && !userInfo) {
    return <Navigate to="/login" replace />;
  }

  if (userInfo?.role === 'user' && window.location.pathname === '/add-new') {
    return <Navigate to="/" replace />;
  }


  return children;
}
