import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import LoginPage from '../pages/login/login.page';
import SignUpPage from "../pages/sign-up/sign-up.page";

export const MainRoutes = () => {
	return (
		<Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/sign-up" exact component={SignUpPage} />

            <Redirect to="/" />
        </Switch>
	);
};
