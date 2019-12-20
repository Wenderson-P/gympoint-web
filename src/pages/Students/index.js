import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Table from '~/components/Table';

import api from '~/services/api';

const headers = ['NOME', 'EMAIL', 'IDADE'];
const dataDisplay = ['name', 'email', 'age'];

const options = [
  { name: 'editar', color: 'blue' },
  { name: 'apagar', color: 'red' },
];

export default function Alunos() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, [students]);

  return (
    <Container>
      <Table
        headers={headers}
        data={students}
        dataDisplay={dataDisplay}
        options={options}
      />
    </Container>
  );
}
