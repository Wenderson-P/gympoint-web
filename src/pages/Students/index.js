import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import Table from '~/components/Table';
import { PageHeader, SearchBar } from './styles';

import api from '~/services/api';

const headers = [
  { name: 'NOME' },
  { name: 'EMAIL' },
  { name: 'IDADE', textAlign: 'center' },
];
const dataDisplay = ['name', 'email', 'age'];

export default function Alunos({ history, location }) {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchBarActive, setSearchBarActive] = useState(false);

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

  function handleAddClick() {
    history.push(`students/form`);
  }

  async function handleSearchBarChange(inputValue) {
    if (inputValue !== '') {
      const filtered = await [
        students.find(student =>
          student.name
            .normalize('NFD')
            .toLowerCase()
            .replace(/[\u0300-\u036f]/g, '')
            .includes(
              inputValue
                .normalize('NFD')
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, '')
            )
        ),
      ];

      if (filtered[0] === undefined) {
        setFilteredStudents(['']);
      } else {
        setFilteredStudents(filtered);
      }
      setSearchBarActive(true);
    } else {
      setSearchBarActive(false);
    }
  }
  return (
    <>
      <PageHeader>
        <h2>Alunos</h2>
        <aside>
          <button type="button" onClick={handleAddClick}>
            <FaPlus /> CADASTRAR
          </button>
          <SearchBar
            type="text"
            onChange={e => handleSearchBarChange(e.target.value)}
            placeholder="Buscar aluno"
          />
        </aside>
      </PageHeader>
      <Table
        headers={headers}
        data={searchBarActive ? filteredStudents : students}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
