import React, { useState } from 'react';

// Style
import './login.page.scss';
import { LoadingButton } from '../../shared/components/buttons/loading-button/loading-button.component';

const LoginPage = (): JSX.Element => {
    // State
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

                    <LoadingButton
                        className="login__button text--white"
                        isLoading={isLoading}
                        onClick={() => {}}
                    >
                        Entrar
                    </LoadingButton>
                </div>

                <footer>
                    <p className="text--align-center mb-5">Novo por aqui?</p>
                    <p 
                        className="text--align-center text--underline hoverable"
                        onClick={() => {}}
                    >
                        Faça seu cadastro
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default LoginPage;
