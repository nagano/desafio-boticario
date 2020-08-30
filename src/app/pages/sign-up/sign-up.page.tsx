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
import { LabeledInput } from '../../shared/components/inputs/labeled-input/labeled-input.component';
import { PasswordInput } from '../../shared/components/inputs/password-input/password-input.component';

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
                    <LabeledInput
                        containerClass="mb-20"
                        inputClass="sign-up__input"
                        id="name"
                        label="Nome completo"
                        value={name}
                        onChange={(updatedName: string|number) => setName(updatedName as string)} />

                    <LabeledInput
                        containerClass="mb-20"
                        inputClass="sign-up__input"
                        id="cpf"
                        label="CPF"
                        value={cpf}
                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                        onChange={(updatedCpf: string|number) => setCpf(updatedCpf as string)} />

                    <LabeledInput
                        containerClass="mb-20"
                        inputClass="sign-up__input"
                        id="email"
                        label="E-mail"
                        value={email}
                        onChange={(updatedEmail: string|number) => setEmail(updatedEmail as string)} />

                    <div className="sign-up__password-container flexbox mb-20">
                        <LabeledInput
                            containerClass="width-50 mr-5"
                            inputClass="sign-up__input password"
                            id="password"
                            type="password"
                            label="Senha"
                            value={password}
                            onChange={(updatedPassword: string|number) => setPassword(updatedPassword as string)} />

                        <LabeledInput
                            containerClass="width-50 ml-5"
                            inputClass="sign-up__input password"
                            id="confirmPassword"
                            type="password"
                            label="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(updatedConfirmPassword: string|number) => setPassword(updatedConfirmPassword as string)} />
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
