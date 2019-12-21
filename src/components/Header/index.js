import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/action';

import { Container, Content, Pages } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

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
            <Link to="/students" active={active ? 1 : 0}>
              ALUNOS
            </Link>
            <Link to="/plans">PLANOS</Link>
            <Link to="/enrollments">MATRÍCULAS</Link>
            <Link to="/helporders">PEDIDOS DE AUXÍLIO</Link>
          </Pages>
        </nav>

        <aside>
          <h4>{profile.name}</h4>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
