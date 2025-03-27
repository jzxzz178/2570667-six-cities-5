import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../const';

interface PrivateRouteProps {
    authStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  if (authStatus === AuthorizationStatus.NoAuth || AuthorizationStatus.Unknown) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
