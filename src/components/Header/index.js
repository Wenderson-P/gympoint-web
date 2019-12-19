import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Pages } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
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
          <Link to="/signOut">sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
