import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PageHeader from '~/components/PageHeader';
import Table from '~/components/Table';

import api from '~/services/api';

const headers = [
  { name: 'ALUNO', textAlign: 'center' },
  { name: 'PLANO', textAlign: 'center' },
  { name: 'INÍCIO', textAlign: 'center' },
  { name: 'TÉRMINO', textAlign: 'center' },
  { name: 'ATIVA', textAlign: 'center' },
];
const dataDisplay = [
  'studentName',
  'planName',
  'startDate',
  'endDate',
  'active',
];

const options = [
  {
    name: 'editar',
    color: '#4D85EE',
    path: '/enrollments/form',
  },
  {
    name: 'apagar',
    color: '#DE3B3B',
    path: '/enrollments',
  },
];
export default function Enrollments({ history, location }) {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');
      try {
        const { data } = location.state;
        if (window.confirm('Deseja deletar esta matricula?') === true) {
          const { id } = data;
          await api.delete(`enrollments/${id}`);
          history.replace();
          setEnrollments(enrollments.filter(plan => plan.id !== id));
        } else {
          history.replace();
        }
      } catch (error) { }
      const items = response.data.map(item => {
        return {
          id: item.id,
          studentName: item.student.name,
          planName: item.plan.title,
          start_date: parseISO(item.start_date),
          startDate: format(
            parseISO(item.start_date),
            "d 'de' MMMM 'de'  yyyy",
            {
              locale: pt,
            }
          ),
          endDate: format(parseISO(item.end_date), "d 'de' MMMM 'de'  yyyy", {
            locale: pt,
          }),
          active: item.active ? 'Sim' : 'Não',
        };
      });
      setEnrollments(items);
    }

    loadEnrollments();
  }, [location.state]); //eslint-disable-line

  return (
    <>
      <PageHeader pageName="Matrículas" history={history} />

      <Table
        headers={headers}
        data={enrollments}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
