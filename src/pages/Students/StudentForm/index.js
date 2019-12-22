import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Row, MultipleItemRow } from './styles';
import api from '~/services/api';

export default function StudentForm({ location, history, match }) {
  const [student, setStudent] = useState(['']);
  const [formType, setFormType] = useState('');

  useEffect(() => {
    async function loadStudent() {
      try {
        const { data } = location.state;
        setFormType('add');
        setStudent(data);
      } catch (error) {
        setFormType('update');
      }
    }

    loadStudent();
  }, [location.state, match.params]);

  function goBack() {
    history.goBack();
  }

  function handleFormSubmit() {
    if (formType === 'add') {
      // Make redux store request
    } else {
      // Make redux update request
    }
  }

  return (
    <>
      <div>
        <h2>{formType === 'add' ? 'Edição de aluno' : 'Cadastro de aluno'}</h2>
        <div>
          <button type="button" onClick={goBack}>
            <FaChevronLeft size={14} />
            Voltar
          </button>
          <button type="button">
            <FaCheck size={14} />
            Salvar
          </button>
        </div>
      </div>
      <Form initialData={student} onSubmit={handleFormSubmit}>
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
