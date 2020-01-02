import styled from 'styled-components';

export const Container = styled.div`
  button {
    background: #ee4d64;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
  }
  .react-datepicker__navigation {
    background: none !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    width: 0 !important;
    padding: 0 !important;
    border: 0.45rem solid transparent !important;
  }
  .react-datepicker__navigation--next {
    border-left-color: #ccc !important;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #ccc !important;
  }
`;
