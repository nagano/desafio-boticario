import React, { useState } from 'react';

// Services
import MockedAPI from '../../shared/services/api.service';
import Notification, { NOTIFICATION_ID } from '../../shared/services/notification.service';
// Components
import { MaskedInput } from '../../shared/components/inputs/masked-input/masked-input.component';
import { LoadingButton } from '../../shared/components/buttons/loading-button/loading-button.component';
// History
import { history } from '../../App';
// Style
import './sign-up.page.scss';

// Notification messages
const INCOMPLETE_FORM_MSG: string = 'Por favor, preencha todos os campos.';
const PASSWORDS_DONT_MATCH: string = 'As senhas não possuem o mesmo valor.';
const LOGIN_ERROR_MSG: string = 'Erro ao efetuar cadastro. Por favor, tente novamente mais tarde.';
const SIGN_UP_SUCCESS: string = 'Novo usuário cadastrado com sucesso! Você já pode entrar no portal!';

const SignUpPage = (): JSX.Element => {
    // State
    const [name, setName] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Methods
    const registerUser = () => {
        if (isLoading) return;

        if (!name || !cpf || !email || !password) {
            Notification.error(INCOMPLETE_FORM_MSG, NOTIFICATION_ID.INCOMPLETE_FORM);
            return;
        }

        if (password !== confirmPassword) {
            Notification.error(PASSWORDS_DONT_MATCH, NOTIFICATION_ID.INCORRECT_FORM);
            return;
        }

        setIsLoading(true);

        MockedAPI
            .signUp({ name, cpf, email, password })
            .then(() => {
                history.replace('/');
                Notification.success(SIGN_UP_SUCCESS);
            })
            .catch(() => {
                Notification.error(LOGIN_ERROR_MSG);
                setIsLoading(false);
            });
    };

    return (
        <div className="sign-up flex-center-absolute height-100">
            <main className="default-page-container">
                <h1 className="text--align-center mb-30">
                    Novo cadastro
                </h1>

                <div className="mb-30">
                    <section className="flexbox flex-column mb-20">
                        <label className="fz-label text--gray-4 mb-5" htmlFor="name">Nome completo</label>
                        <input 
                            className="sign-up__input"
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                    </section>

                    <section className="flexbox flex-column mb-20">
                        <label className="fz-label text--gray-4 mb-5" htmlFor="cpf">CPF</label>
                        <MaskedInput
                            className="sign-up__input"
                            id="cpf"
                            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                            value={cpf}
                            onChange={(updatedCpf: string) => setCpf(updatedCpf)} />
                    </section>

                    <section className="flexbox flex-column mb-20">
                        <label className="fz-label text--gray-4 mb-5" htmlFor="email">E-mail</label>
                        <input 
                            className="sign-up__input"
                            id="email"
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </section>

                    <div className="sign-up__password-container flexbox mb-20">
                        <section className="flexbox flex-column width-50 mr-5">
                            <label className="fz-label text--gray-4 mb-5" htmlFor="password">Senha</label>
                            <input 
                                className="sign-up__input"
                                id="password"
                                type="text"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </section>

                        <section className="flexbox flex-column width-50 ml-5">
                            <label className="fz-label text--gray-4 mb-5" htmlFor="confirmPassword">Confirme sua senha</label>
                            <input 
                                className="sign-up__input"
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)} />
                        </section>
                    </div>

                </div>

                <div className="flexbox justify-content--center">
                    <LoadingButton
                        className="sign-up__button text--white"
                        isLoading={isLoading}
                        onClick={registerUser}
                    >
                        Cadastrar
                    </LoadingButton>
                </div>
            </main>
        </div>
    );
};

export default SignUpPage
