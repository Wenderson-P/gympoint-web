import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import Table from '~/components/Table';
import PageHeader from '~/components/PageHeader';

import api from '~/services/api';

const headers = [
  { name: 'NOME' },
  { name: 'EMAIL' },
  { name: 'IDADE', textAlign: 'center' },
];
const dataDisplay = ['name', 'email', 'age'];

export default function Alunos({ history, location }) {
  const [students, setStudents] = useState([]);
  const [pageAction, setPageAction] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);

      try {
        const { data } = location.state;
        if (window.confirm('Deseja deletar este aluno?') === true) {
          const { id } = data;
          await api.delete(`students/${id}`);
          history.replace();
          setStudents(students.filter(student => student.id !== id));
        }
      } catch (error) { }
    }
    loadStudents();
  }, [location.state]); //eslint-disable-line

  const options = [
    {
      name: 'editar',
      color: '#4D85EE',
      path: '/students/form',
    },
    {
      name: 'apagar',
      color: '#DE3B3B',
      path: '/students',
    },
  ];

  return (
    <>
      <PageHeader pageName="Alunos" history={history} />
      <Table
        headers={headers}
        data={students}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
