import React, { useState } from 'react';

// Services
import MockedAPI from '../../shared/services/api.service';
import Notification, { NOTIFICATION_ID } from '../../shared/services/notification.service';
// Components
import { LoadingButton } from '../../shared/components/buttons/loading-button/loading-button.component';
// History
import { history } from '../../App';
// Style
import './login.page.scss';

// Notification messages
const INCOMPLETE_FORM_MSG: string = 'Por favor, preencha todos os campos.';
const LOGIN_ERROR_MSG: string = 'Erro ao efetuar login. Por favor, tente novamente mais tarde.';

const LoginPage = (): JSX.Element => {
    // State
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Methods
    const login = () => {
        if (isLoading) return;

        if (!email || !password) {
            Notification.error(INCOMPLETE_FORM_MSG, NOTIFICATION_ID.INCOMPLETE_FORM);
            return;
        }

        setIsLoading(true);

        MockedAPI
            .login(email, password)
            .then(() => {
                history.push('/orders');
            })
            .catch(() => {
                Notification.error(LOGIN_ERROR_MSG);
                setIsLoading(false);
            })
    };

    const navigateToSignUpPage = () => {
        history.push('/sign-up');
    };

    return (
        <div className="login flex-center-absolute height-100">
            <main className="login__container">
                <h1 className="text--align-center mb-30">
                    Portal do revendedor Boticário
                </h1>

                <div className="mb-30">
                    <section className="flexbox flex-column mb-20">
                        <label className="fz-label text--gray-4 mb-5" htmlFor="email">E-mail</label>
                        <input 
                            id="email"
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </section>

                    <section className="flexbox flex-column mb-30">
                        <label className="fz-label text--gray-4 mb-5" htmlFor="password">Password</label>
                        <input 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </section>

                    <div className="flexbox justify-content--center">
                        <LoadingButton
                            className="login__button text--white"
                            isLoading={isLoading}
                            onClick={login}
                        >
                            Entrar
                        </LoadingButton>
                    </div>
                </div>

                <footer>
                    <p className="text--align-center mb-5">Novo por aqui?</p>
                    <p 
                        className="text--align-center text--underline hoverable"
                        onClick={navigateToSignUpPage}
                    >
                        Faça seu cadastro
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default LoginPage;
