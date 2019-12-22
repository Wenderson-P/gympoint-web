import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TableContent, Header, Data, TableOption } from './styles';

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
                  <TableOption color={option.color}>
                    <Link
                      to={{
                        pathname: `${option.path}`,
                        state: {
                          data: item,
                        },
                      }}
                    >
                      {option.name}
                    </Link>
                  </TableOption>
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
