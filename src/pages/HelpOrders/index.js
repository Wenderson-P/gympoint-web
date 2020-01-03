import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import PageHeader from '~/components/PageHeader';
import { Table, AnswerButton, ModalContent, ModalCloseButton } from './styles';

import api from '~/services/api';

export default function HelpOrders({ history }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const [helpOrderAnswer, setHelpOrderAnswer] = useState('');

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

  async function sendAnswer(data) {
    try {
      const { id } = data;
      await api.post(`/help-orders/${id}/answer`, { answer: helpOrderAnswer });
      setHelpOrderAnswer('');
      history.push('/help-orders');
    } catch (error) {
      toast.error('Não foi possivel enviar a resposta ');
    }
  }
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
                      <textarea
                        id="answer"
                        name="answer"
                        onChange={e => setHelpOrderAnswer(e.target.value)}
                      />

                      <ModalCloseButton
                        type="button"
                        onClick={() => {
                          close();
                          sendAnswer(data);
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
