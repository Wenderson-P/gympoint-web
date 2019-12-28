import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const MultipleItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    display: flex;
    flex-direction: column;
  }
`;

export const FormBody = styled.div`
  padding: 8px 15px;
`;
