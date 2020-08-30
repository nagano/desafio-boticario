import React from 'react';

// Services
import Storage from '../../services/storage.service';
// History
import { history } from '../../../App';
// Styles
import './authenticated-header.component.scss';
// Assets
const logo: string = require('../../../assets/logo.boticario.png');


interface AuthenticatedHeaderProps {
    onClick: () => void;
};

export const AuthenticatedHeader = (props: AuthenticatedHeaderProps): JSX.Element => {
    // Methods
    const logout = () => {
        Storage.clearAll();
        history.replace('/');
    };

    const getLocation = (): string => {
        switch (history.location.pathname) {
            case '/orders':
                return 'Compras';
            default:
                return '';
        }
    };

    return (
        <div className="authenticated-header flexbox space-between align-items--center pl-20 pr-20 mb-5">
            <div className="flexbox align-items--center width-30">
                <img className="authenticated-header__logo" src={logo} alt="logo" />

                <div className="flexbox flex-column ml-5">
                    <h4>Grupo</h4>
                    <h4>Boticário</h4>
                </div>
            </div>

            <h2 className="text--align-center width-30">
                {getLocation()}
            </h2>

            <div className="flexbox justify-content--end width-30">
                <p 
                    className=" hoverable"
                    onClick={logout}
                >
                    Sair
                </p>
            </div>
        </div>
    );
};
