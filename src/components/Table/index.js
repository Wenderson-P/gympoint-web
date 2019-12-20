import React from 'react';

import { Container, Header } from './styles';

export default function Table({ headers, data, dataDisplay, options }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <Header>{header}</Header>
            ))}
            <Header />
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              {dataDisplay.map(itemName => (
                <td>{item[itemName]} </td>
              ))}
              {options.map(option => (
                <button type="button" onClick={option.onclick}>
                  {option.name}
                </button>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
