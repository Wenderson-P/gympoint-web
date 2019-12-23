import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';
import PageHeader from '~/components/PageHeader';
import api from '~/services/api';

const headers = [
  { name: 'TÍTULO  ' },
  { name: 'DURAÇÃO ', textAlign: 'center' },
  { name: 'VALOR MENSAL', textAlign: 'center' },
];
const dataDisplay = ['title', 'duration', 'price'];

const options = [
  { name: 'editar', color: '#4D85EE', path: '/plans/form' },
  { name: 'apagar', color: '#DE3B3B' },
];

export default function Alunos({ history }) {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }
    loadPlans();
  }, []);

  return (
    <>
      <PageHeader pageName="Planos" history={history} />
      <Table
        headers={headers}
        data={plans}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
