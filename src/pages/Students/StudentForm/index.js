import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Row, MultipleItemRow } from './styles';

export default function StudentForm({ location }) {
  const [student, setStudent] = useState(['']);

  useEffect(() => {
    async function loadStudent() {
      const { data } = location.state;
      setStudent(data);
    }

    loadStudent();
  }, [location.state]);

  return (
    <>
      <div>
        <h2>Edição de aluno</h2>
        <div>
          <button type="button">
            <FaChevronLeft size={14} />
            Voltar
          </button>
          <button type="button">
            <FaCheck size={14} />
            Salvar
          </button>
        </div>
      </div>
      <Form initialData={student}>
        <Row>
          <label htmlFor="name">
            NOME COMPLETO
            <Input type="text" name="name" id="name" />
          </label>
        </Row>
        <Row>
          <label htmlFor="email">
            ENDEREÇO DE E-MAIL
            <Input type="email" name="email" id="email" />
          </label>
        </Row>
        <MultipleItemRow>
          <label htmlFor="age">
            IDADE
            <Input type="number" name="age" id="age" />
          </label>
          <label htmlFor="weight">
            PESO (em kg)
            <Input type="number" name="weight" id="weight" />
          </label>
          <label htmlFor="height">
            Altura
            <Input type="email" name="height" id="height" />
          </label>
        </MultipleItemRow>
      </Form>
    </>
  );
}
