import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

interface PrivateRouteProps {
    authStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  if (authStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} replace />;
  }

  return children;
}

export default PrivateRoute;
