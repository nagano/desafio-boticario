import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';

// Routes
import { MainRoutes } from './routes/main.routes';
// Styles
import 'react-toastify/dist/ReactToastify.min.css';
import "react-datepicker/dist/react-datepicker.min.css";

// Shared history
export const history = createBrowserHistory();

const App = (): JSX.Element => {
    // Setup react-modal
    ReactModal.setAppElement('#root');

    return (
        <React.Fragment>
            <Router history={history}>
                <Route component={MainRoutes} />
            </Router>

            <ToastContainer />
        </React.Fragment>
    );
};

export default App;
