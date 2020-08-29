import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Routes
import { MainRoutes } from './routes/main.routes';

// Shared history
export const history = createBrowserHistory();

const App = (): JSX.Element => {
    return (
        <Router history={history}>
            <Route component={MainRoutes} />
        </Router>
    );
};

export default App;
