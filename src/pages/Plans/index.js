import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';

import api from '~/services/api';

const headers = [
  { name: 'TÍTULO  ' },
  { name: 'DURAÇÃO ', textAlign: 'center' },
  { name: 'VALOR MENSAL', textAlign: 'center' },
];
const dataDisplay = ['title', 'duration', 'price'];

const options = [
  { name: 'editar', color: '#4D85EE' },
  { name: 'apagar', color: '#DE3B3B' },
];

export default function Alunos() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }
    loadPlans();
  }, [plans]);

  return (
    <>
      <div>
        <h2>Gerenciando alunos</h2>
        <button type="button">CADASTRAR</button>
      </div>
      <Table
        headers={headers}
        data={plans}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
