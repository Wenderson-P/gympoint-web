import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/action';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispacth = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispacth(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="" />
      <h1>GYMPOINT</h1>
      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="userEmail">SEU E-MAIL</label>
        <Input
          type="email"
          name="email"
          id="userEmail"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="userPassword">SUA SENHA</label>
        <Input
          type="password"
          name="password"
          id="userPassword"
          placeholder="*******"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
