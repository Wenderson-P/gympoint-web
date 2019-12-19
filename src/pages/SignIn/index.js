import React from 'react';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="" />
      <h1>GYMPOINT</h1>
      <form>
        <label htmlFor="userEmail">SEU E-MAIL</label>
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="userPassword">SUA SENHA</label>
        <input
          type="password"
          name="password"
          id="userPassword"
          placeholder="*******"
        />
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
