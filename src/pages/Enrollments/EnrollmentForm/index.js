import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { startOfToday, format } from 'date-fns';
import Select from 'react-select';
import FormHeader from '~/components/FormHeader';
import {
  FormContent,
  Row,
  MultipleItemRow,
  ReactSelectElement,
} from './styles';
import api from '~/services/api';

export default function EnrollmentForm({ history, location }) {
  const [enrollment, setEnrollment] = useState(['']);
  const [students, setStudents] = useState(['']);
  const [plans, setPlans] = useState(['']);
  const [formType, setFormType] = useState('');

  useEffect(() => {
    async function loadEnrollment() {
      try {
        const { data } = location.state;
        setEnrollment(data);
        setFormType('update');
      } catch (error) {
        const today = startOfToday();
        const data = {
          startDate: format(today, 'yyyy-MM-dd'),
        };
        setEnrollment(data);
        setFormType('add');
      }
    }

    loadEnrollment();
  }, [location.state]);

  function handleFormSubmit({ name, email, weight, height, age }) {
    if (formType === 'add') {
      api.post('/enrollments', {
        name,
        email,
        weight,
        height,
        age,
      });
    } else {
      const { id } = enrollment;
      api.post('/enrollments', {
        id,
        name,
        email,
        weight,
        height,
        age,
      });
    }
  }
  return (
    <>
      <Form initialData={enrollment} onSubmit={handleFormSubmit}>
        <FormHeader
          history={history}
          formType={formType}
          addTitle="Nova Matrícula"
          editTitle="Edição de matrícula"
        />
        <FormContent>
          <Row>
            <label htmlFor="studentName">ALUNO</label>
            <Select options={students} />
          </Row>
          <MultipleItemRow>
            <label htmlFor="planName">
              PLANO
              <ReactSelectElement options={plans} width="300px" />
            </label>
            <label htmlFor="startDate">
              DATA DE INÍCIO
              <Input
                type="date"
                name="startDate"
                id="startDate"
                defaultValue={enrollment.startDate}
              />
            </label>
            <label htmlFor="finalDate">
              DATA DE TÉRMINO
              <Input type="date" name="finalDate" id="finalDate" disabled />
            </label>
            <label htmlFor="finalPrice">
              VALOR FINAL
              <Input type="email" name="finalPrice" id="finalPrice" disabled />
            </label>
          </MultipleItemRow>
        </FormContent>
      </Form>
    </>
  );
}
