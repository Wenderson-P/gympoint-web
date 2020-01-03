import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

export default function PageHeader({ pageName, history, hideButton }) {
  function handleAddClick() {
    const { pathname } = history.location;

    history.push(`${pathname}/form`);
  }

  return (
    <Container>
      <h2>{pageName}</h2>
      {!hideButton && (
        <button type="button" onClick={handleAddClick}>
          <FaPlus /> CADASTRAR
        </button>
      )}
    </Container>
  );
}
