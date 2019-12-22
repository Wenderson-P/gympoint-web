import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';

import api from '~/services/api';

const headers = [
  { name: 'NOME' },
  { name: 'EMAIL' },
  { name: 'IDADE', textAlign: 'center' },
];
const dataDisplay = ['name', 'email', 'age'];

const options = [
  {
    name: 'editar',
    color: '#4D85EE',
    path: '/students/form',
  },
  {
    name: 'apagar',
    color: '#DE3B3B',
    path: '/students/delete',
  },
];

export default function Alunos({ history }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);

  return (
    <>
      <div>
        <h2>Gerenciando alunos</h2>
        <button type="button">CADASTRAR</button>
      </div>
      <Table
        headers={headers}
        data={students}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
