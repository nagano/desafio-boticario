import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import { AuthenticatedHeader } from '../shared/components/authenticated-header/authenticated-header.component';
// Pages
import OrdersPage from "../pages/orders/orders.page";

export const AuthenticatedRoutes = (): JSX.Element => {
    return (
        <React.Fragment>
            <AuthenticatedHeader onClick={() => {}} />

            <Switch>
                <Route path="/orders" exact component={OrdersPage} />
            </Switch>
        </React.Fragment>
    );
};
