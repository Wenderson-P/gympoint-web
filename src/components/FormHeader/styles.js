import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  aside {
    display: flex;

    button {
      display: flex;
      align-items: center;
      margin-left: 16px;
      svg {
        margin: 0px 8px;
      }
      &:first-child {
        background: #cccccc;
      }
    }
  }
`;
