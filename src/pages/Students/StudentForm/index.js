import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Row, MultipleItemRow, FormBody } from './styles';

import { storeRequest } from '~/store/modules/student/action';

export default function StudentForm({ location, history, match }) {
  const [student, setStudent] = useState(['']);
  const [formType, setFormType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudent() {
      try {
        const { data } = location.state;
        setFormType('update');
        setStudent(data);
      } catch (error) {
        setFormType('add');
      }
    }

    loadStudent();
  }, [location.state, match.params]);

  function goBack() {
    history.goBack();
  }

  function handleFormSubmit({ name, email, weight, height, age }) {
    if (formType === 'add') {
      dispatch(storeRequest(name, email, weight, height, age));
    } else {
      // Make redux update request
    }
  }

  return (
    <Form initialData={student} onSubmit={handleFormSubmit}>
      <div>
        <h2>{formType === 'add' ? 'Cadastro de aluno' : 'Edição de aluno'}</h2>
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
      </div>
      <FormBody>
        <Row>
          <label htmlFor="name">
            NOME COMPLETO
            <Input type="text" name="name" id="name" />
          </label>
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
            <Input type="float" name="height" id="height" />
          </label>
        </MultipleItemRow>
      </FormBody>
    </Form>
  );
}
