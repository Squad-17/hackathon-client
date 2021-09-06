import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

type ProtectedRouteProps = {
  path: string;
  component:
    | React.ComponentType
    | React.ComponentType<RouteComponentProps>
    | undefined;
  exact?: boolean | undefined;
};

export default function ProtectedRoute({
  path,
  component,
  ...props
}: ProtectedRouteProps) {
  const { name } = useAuth();

  return !!name ? (
    <Route path={path} component={component} {...props} />
  ) : (
    <Redirect to='/login' />
  );
}
