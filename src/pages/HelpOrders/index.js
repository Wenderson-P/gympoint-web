import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import PageHeader from '~/components/PageHeader';
import { Table, AnswerButton, ModalContent, ModalCloseButton } from './styles';

import api from '~/services/api';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('/students/help-orders');
      const data = response.data.map(item => {
        return {
          id: item.id,
          question: item.question,
          name: item.student.name,
        };
      });
      setHelpOrders(data);
    }
    loadHelpOrders();
  }, []);

  return (
    <>
      <PageHeader pageName="Pedidos de auxílio" hideButton />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {helpOrders.map(data => (
            <tr>
              <td>{data.name}</td>
              <td>
                <Popup trigger={<AnswerButton> responder</AnswerButton>} modal>
                  {close => (
                    <ModalContent>
                      <span>PERGUNTA DO ALUNO</span>
                      <p>{data.question}</p>
                      <span>RESPOSTA</span>
                      <textarea id="answer" name="answer" />

                      <ModalCloseButton
                        type="button"
                        onClick={() => {
                          close();
                        }}
                      >
                        Responder aluno
                      </ModalCloseButton>
                    </ModalContent>
                  )}
                </Popup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
