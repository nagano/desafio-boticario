import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import LoginPage from '../pages/login/login.page';

export const MainRoutes = () => {
	return (
		<Switch>
            <Route path="/" exact component={LoginPage} />

            <Redirect to="/" />
        </Switch>
	);
};
