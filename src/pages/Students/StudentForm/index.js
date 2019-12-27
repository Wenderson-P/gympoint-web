import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { Row, MultipleItemRow, FormBody } from './styles';
import FormHeader from '~/components/FormHeader';
import { storeRequest, updateRequest } from '~/store/modules/student/action';

export default function StudentForm({ location, history }) {
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
  }, [location.state]);

  function handleFormSubmit({ name, email, weight, height, age }) {
    if (formType === 'add') {
      dispatch(storeRequest(name, email, weight, height, age));
    } else {
      const { id } = student;
      dispatch(updateRequest(name, email, weight, height, age, id));
    }
  }

  return (
    <Form initialData={student} onSubmit={handleFormSubmit}>
      <FormHeader
        history={history}
        formType={formType}
        addTitle="Cadastro de aluno"
        editTitle="Edição de aluno"
      />
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
