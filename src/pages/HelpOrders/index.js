import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';

import api from '~/services/api';

const headers = [{ name: 'NOME' }];
const dataDisplay = ['name'];

const options = [{ name: 'responder', color: '#4D85EE' }];

export default function Alunos() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('/students/help-orders');
      const data = response.data.map(item => {
        return {
          name: item.student.name,
        };
      });
      setHelpOrders(data);
    }
    loadHelpOrders();
  }, [helpOrders]);

  return (
    <>
      <div>
        <h2>Pedidos de auxílio</h2>
      </div>
      <Table
        headers={headers}
        data={helpOrders}
        dataDisplay={dataDisplay}
        options={options}
      />
    </>
  );
}
