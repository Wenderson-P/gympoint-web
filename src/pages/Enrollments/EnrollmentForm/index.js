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
  const [selectedStudent, setSelectedStudent] = useState('');
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
          student_id: item.id,
        };
      });
      setStudents(data);
      if (student) {
        setSelectedStudent(data[0]);
      }
    }

    async function loadPlans(plan = false) {
      const response = await api.get(`/plans`);
      const data = response.data.map(item => {
        return {
          value: item.title,
          label: item.title,
          price: item.price,
          duration: item.duration,
          plan_id: item.id,
        };
      });
      if (plan) {
        const studentPlan = data.filter(item => item.value === plan);
        setSelectedPlan(studentPlan[0]);
      }
      setPlans(data);
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
          start_date: today,
        };
        setEnrollment(data);
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
        enrollment.start_date,
        selectedPlan.duration
      );
      const final_price = selectedPlan.price * selectedPlan.duration;
      setEnrollment({
        ...enrollment,
        final_date,
        final_price,
      });
    }
  }, [selectedPlan, enrollment.start_date]); //eslint-disable-line

  async function handleFormSubmit() {
    const { id, start_date } = enrollment;
    const { plan_id } = selectedPlan;
    const { student_id } = selectedStudent;
    if (formType === 'add') {
      await api.post('/enrollments', {
        student_id,
        plan_id,
        start_date,
      });
      history.push('/enrollments');
    } else {
      await api.put('/enrollments', {
        id,
        plan_id,
        start_date,
      });
      history.push('/enrollments');
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
            <label>ALUNO</label>
            <Select
              options={formType === 'update' ? [] : students}
              onChange={event => {
                setSelectedStudent(event);
              }}
              value={selectedStudent}
            />
          </Row>
          <MultipleItemRow>
            <label>
              PLANO
              <ReactSelectElement
                options={plans}
                onChange={event => setSelectedPlan(event)}
                value={selectedPlan}
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
