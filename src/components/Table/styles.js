import styled from 'styled-components';

export const TableContent = styled.table`
  width: 100%;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 4px;
  padding: 30px;
  tbody {
    tr {
      height: 100%;
      padding: 16px 0px;
      border: 1px solid black;
    }
    td {
      border-bottom: 1px solid #eeeeee;
    }
  }
`;

export const Header = styled.th`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: ${props => props.textAlign || 'left'};
  color: #444444;
  padding: 16px 0px;
`;

export const Data = styled.td`
  font-size: 16px;
  line-height: 20px;
  text-align: ${props => props.textAlign || 'left'};
  padding: 16px 0px;
  color: #666666;
`;

export const Button = styled.button`
  background: none !important ;
  border: none !important ;
  margin-left: 20px !important ;
  color: ${props => props.color || '#4D85EE'} !important ;
  padding: 0px !important;
  font-weight: normal !important;
`;
