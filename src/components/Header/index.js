import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/action';

import { Container, Content, Pages } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  const active = true;
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo gympoint" />
          <h1>GYMPOINT</h1>
          <hr />
          <Pages>
            <Link to="/alunos" active={active ? 1 : 0}>
              ALUNOS
            </Link>
            <Link to="/planos">PLANOS</Link>
            <Link to="/matriculas">MATRÍCULAS</Link>
            <Link to="/pedidos">PEDIDOS DE AUXÍLIO</Link>
          </Pages>
        </nav>

        <aside>
          <h4>Wenderson Pacheco</h4>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
