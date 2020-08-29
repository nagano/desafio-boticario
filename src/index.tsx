import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import './reset.scss';
import './app/shared/style/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
