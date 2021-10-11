import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouterProps = RouteProps & {
    render: () => JSX.Element;
    authorizationStatus: AuthorizationStatus;
};

function PrivateRouter(props: PrivateRouterProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRouter;


