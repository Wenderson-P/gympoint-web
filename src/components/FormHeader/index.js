import React from 'react';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Container } from './styles';

export default function FormHeader({ formType, addTitle, editTitle, history }) {
  function goBack() {
    history.goBack();
  }
  return (
    <Container>
      <h2>{formType === 'add' ? `${addTitle}` : `${editTitle}`}</h2>
      <aside>
        <button type="button" onClick={goBack}>
          <FaChevronLeft size={14} />
          Voltar
        </button>
        <button type="submit">
          <FaCheck size={14} />
          Salvar
        </button>
      </aside>
    </Container>
  );
}
