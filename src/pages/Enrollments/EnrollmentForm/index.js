import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { startOfToday, format, addMonths, parseISO } from 'date-fns';
import Select from 'react-select';
import DatePicker from '~/components/DatePicker';
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
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    async function loadStudents(student = false) {
      let response = [];
      if (student) {
        response = await api.get(`/students?q=${encodeURI(student)}`);
      } else {
        response = await api.get(`/students`);
      }

      const data = response.data.map(item => {
        return {
          value: item.name,
          label: item.name,
          id: item.id,
        };
      });
      setStudents(data);
    }

    async function loadPlans(plan = false) {
      const response = await api.get(`/plans`);

      if (plan) {
        const data = response.data.filter(item => {
          return item.title === plan;
        });
        setPlans({
          value: data[0].title,
          label: data[0].title,
          price: data[0].price,
          duration: data[0].duration,
          id: data[0].id,
        });
      } else {
        const data = response.data.map(item => {
          return {
            value: item.title,
            label: item.title,
            price: item.price,
            duration: item.duration,
            id: item.id,
          };
        });
        setPlans(data);
      }
    }

    async function loadEnrollment() {
      try {
        const { data } = location.state;
        setEnrollment(data);
        loadStudents(data.studentName);
        loadPlans(data.planName);

        setFormType('update');
      } catch (error) {
        const today = startOfToday();
        const data = {
          start_date: format(today, 'yyyy-MM-dd'),
        };
        await setEnrollment(data);
        setFormType('add');
        loadStudents();
        loadPlans();
      }
    }

    loadEnrollment();
  }, [location.state]); //eslint-disable-line

  useEffect(() => {
    if (enrollment.start_date && selectedPlan) {
      const final_date = addMonths(
        parseISO(enrollment.start_date),
        selectedPlan.duration
      );
      const final_price = selectedPlan.price * selectedPlan.duration;
      setEnrollment({
        ...enrollment,
        plan_id: selectedPlan.id,
        final_date: format(final_date, "yyyy'-'MM'-'dd"),
        final_price,
      });
    }
  }, [selectedPlan, enrollment.start_date]); //eslint-disable-line

  function handleFormSubmit() {
    if (formType === 'add') {
      api.post('/enrollments', {
        student_id: enrollment.student_id,
        plan_id: enrollment.plan_id,
        start_date: enrollment.start_date,
      });
    } else {
      api.post('/enrollments', {
        student_id: enrollment.student_id,
        plan_id: enrollment.plan_id,
        start_date: parseISO(enrollment.start_date),
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
          onChange={e =>
            setEnrollment({ ...enrollment, student_id: e.target.value.id })
          }
        />
        <FormContent>
          <Row>
            <label>ALUNO</label>
            <Select
              options={formType === 'update' ? [] : students}
              onChange={event => {
                setEnrollment({
                  ...enrollment,
                  student_id: event.id,
                  student_name: event.name,
                });
              }}
              value={
                formType === 'update' ? students[0] : enrollment.student_name
              }
            />
          </Row>
          <MultipleItemRow>
            <label>
              PLANO
              <ReactSelectElement
                options={formType === 'update' ? [] : plans}
                onChange={event => setSelectedPlan(event)}
                value={formType === 'update' ? plans : selectedPlan}
              />
            </label>
            <label htmlFor="start_date">
              DATA DE INÍCIO
              <DatePicker
                selected={enrollment.start_date}
                locale="pt-BR"
                onChange={date => {
                  setEnrollment({
                    ...enrollment,
                    start_date: date,
                  });
                }}
              />
            </label>
            <label htmlFor="final_date">
              DATA DE TÉRMINO
              <DatePicker selected={enrollment.final_date} disabled />
            </label>
            <label htmlFor="final_price">
              VALOR FINAL
              <Input
                type="number"
                name="final_price"
                id="final_price"
                disabled
              />
            </label>
          </MultipleItemRow>
        </FormContent>
      </Form>
    </>
  );
}
