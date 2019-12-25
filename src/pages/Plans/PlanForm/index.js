import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormHeader from 'components/FormHeader';
import { Row, MultipleItemRow } from './styles';

export default function PlanForm({ history, location }) {
  const [plan, setPlan] = useState(['']);
  const [formType, setFormType] = useState('');

  useEffect(() => {
    async function loadPlan() {
      try {
        const { data } = location.state;
        const totalPrice = data.price * data.duration;
        data.totalPrice = totalPrice;

        setPlan(data);
        setFormType('update');
      } catch (error) {
        setFormType('add');
      }
    }

    loadPlan();
  }, [location.state]);

  return (
    <>
      <Form initialData={plan}>
        <FormHeader
          history={history}
          formType={formType}
          addTitle="Cadastro de aluno"
          editTitle="Edição de aluno"
        />
        <div>
          <Row>
            <label htmlFor="title">
              TÍTULO DO PLANO
              <Input type="text" name="title" id="title" />
            </label>
          </Row>
          <MultipleItemRow>
            <label htmlFor="duration">
              DURAÇÃO (em meses)
              <Input type="number" name="duration" id="duration" />
            </label>
            <label htmlFor="price">
              PREÇO MENSAL
              <Input type="number" name="price" id="price" />
            </label>
            <label htmlFor="totalPrice">
              PREÇO TOTAL
              <Input type="email" name="totalPrice" id="totalPrice" disabled />
            </label>
          </MultipleItemRow>
        </div>
      </Form>
    </>
  );
}
