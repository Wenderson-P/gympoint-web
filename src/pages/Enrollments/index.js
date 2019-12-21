import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Table from '~/components/Table';

import api from '~/services/api';

const headers = [
  { name: 'ALUNO', textAlign: 'center' },
  { name: 'PLANO', textAlign: 'center' },
  { name: 'INÍCIO', textAlign: 'center' },
  { name: 'TÉRMINO', textAlign: 'center' },
  { name: 'ATIVA', textAlign: 'center' },
];
const dataDisplay = ['studentName', 'plan', 'startDate', 'endDate', 'active'];

const options = [
  { name: 'editar', color: '#4D85EE' },
  { name: 'apagar', color: '#DE3B3B' },
];

export default function Alunos() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');
      const data = response.data.map(data => {
        const active = data.active ? '0' : '1';
        return {
          studentName: data.student.name,
          startDate: format(parseISO(data.start_date), "d 'de' MMMM", {
            locale: pt,
          }),
          endDate: format(parseISO(data.end_date), "d 'de' MMMM", {
            locale: pt,
          }),
          active: data.active ? 'Sim' : 'Não',
        };
      });
      setEnrollments(data);
    }

    loadEnrollments();
  }, []);

  return (
    <>
      <div>
        <h2>Gerenciando Matriculas </h2>
        <button type="button">CADASTRAR</button>
      </div>
      <Table
        headers={headers}
        data={enrollments}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
