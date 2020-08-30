import React from "react";
import { Route, Switch, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

// Services
import Storage from '../shared/services/storage.service';
import Notification from '../shared/services/notification.service';
// Constants
import { STORAGE_KEY } from "../shared/constants/storage.constants";
// Components
import { AuthenticatedRoutes } from './authenticated.routes';
// Pages
import LoginPage from '../pages/login/login.page';
import SignUpPage from "../pages/sign-up/sign-up.page";

const NOT_AUTHENTICATED_MSG: string = 'Usuário não autenticado ou sessão expirada.';

const AuthenticatedPath = ({ component, ...rest }: RouteProps) => {
	if (!component) throw Error("component is undefined");

    const isAuthenticatedAsString: string = Storage.session.get(STORAGE_KEY.IS_AUTHENTICATED) || '0';
    const isAuthenticated: boolean = isAuthenticatedAsString === '1';

	const Component = component; // JSX Elements have to be uppercase.
	const render = (props: RouteComponentProps<any>): React.ReactNode => {
		if (isAuthenticated) {
			return <Component {...props} />;
		} 

        Storage.clearAll();
        Notification.error(NOT_AUTHENTICATED_MSG);

		return <Redirect to="/" />;
	};
 	
	return (<Route {...rest} render={render} />);
};

export const MainRoutes = (props: RouteComponentProps) => {
	return (
		<Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/sign-up" exact component={SignUpPage} />

            <AuthenticatedPath path={`${props.match.url}`} component={AuthenticatedRoutes} />

            <Redirect to="/" />
        </Switch>
	);
};
