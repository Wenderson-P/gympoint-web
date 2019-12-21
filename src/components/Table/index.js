import React from 'react';
import PropTypes from 'prop-types';
import { TableContent, Header, Data, Button } from './styles';

export default function Table({ headers, data, dataDisplay, options }) {
  return (
    <TableContent>
      <thead>
        <tr>
          {headers.map(header => (
            <Header textAlign={header.textAlign}>{header.name}</Header>
          ))}
          <Header />
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <>
            <tr style={{ borderBottom: '1px solid #000' }}>
              {dataDisplay.map((itemName, index) => (
                <Data textAlign={headers[index].textAlign}>
                  {item[itemName]}
                </Data>
              ))}
              <td>
                {options.map(option => (
                  <Button
                    type="button"
                    onClick={option.onclick}
                    color={option.color}
                  >
                    {option.name}
                  </Button>
                ))}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </TableContent>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(Object).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  dataDisplay: PropTypes.arrayOf(String).isRequired,
  options: PropTypes.arrayOf(Object).isRequired,
};
