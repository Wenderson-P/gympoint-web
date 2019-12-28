import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import FormHeader from '~/components/FormHeader';
import { Row, MultipleItemRow } from './styles';
import api from '~/services/api';

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

  async function handleFormSubmit({ price, title, duration }) {
    if (formType === 'add') {
      try {
        await api.post('/plans', {
          price,
          title,
          duration,
        });
        history.push('/plans');
      } catch (error) {
        toast.error('Erro ao cadastrar plano');
      }
    } else {
      try {
        const { id } = plan;
        await api.put('/plans', {
          id,
          price,
          title,
          duration,
        });
        history.push('/plans');
      } catch (error) {
        toast.error('Erro ao atualizar plano');
      }
    }
  }
  return (
    <>
      <Form initialData={plan} onSubmit={handleFormSubmit}>
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
              <Input
                type="number"
                name="duration"
                id="duration"
                onChange={e => {
                  setPlan({
                    ...plan,
                    duration: e.target.value,
                    totalPrice: e.target.value * plan.price,
                  });
                }}
              />
            </label>
            <label htmlFor="price">
              PREÇO MENSAL
              <Input
                type="number"
                name="price"
                id="price"
                onChange={e => {
                  setPlan({
                    ...plan,
                    price: e.target.value,
                    totalPrice: plan.duration * e.target.value,
                  });
                }}
              />
            </label>
            <label htmlFor="totalPrice">
              PREÇO TOTAL
              <Input type="number" name="totalPrice" id="totalPrice" disabled />
            </label>
          </MultipleItemRow>
        </div>
      </Form>
    </>
  );
}
