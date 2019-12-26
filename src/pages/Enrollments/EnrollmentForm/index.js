import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import FormHeader from '~/components/FormHeader';
import { Row, MultipleItemRow } from './styles';

export default function EnrollmentForm({ history, location }) {
  const [enrollment, setEnrollment] = useState(['']);
  const [formType, setFormType] = useState('');

  return (
    <>
      <Form initialData={enrollment}>
        <FormHeader
          history={history}
          formType={formType}
          addTitle="Nova Matrícula"
          editTitle="Edição de matrícula"
        />
        <div>
          <Row>
            <label htmlFor="studentName">
              ALUNO
              <Input type="text" name="studentName" id="studentName" />
            </label>
          </Row>
          <MultipleItemRow>
            <label htmlFor="planName">
              PLANO
              <Input type="text" name="planName" id="planName" />
            </label>
            <label htmlFor="startDate">DATA DE INÍCIO</label>
            <Input type="date" name="startDate" id="startDate" />

            <label htmlFor="finalDate">
              DATA DE TÉRMINO
              <Input type="date" name="finalDate" id="finalDate" />
            </label>
            <label htmlFor="finalPrice">
              VALOR FINAL
              <Input type="email" name="finalPrice" id="finalPrice" disabled />
            </label>
          </MultipleItemRow>
        </div>
      </Form>
    </>
  );
}
