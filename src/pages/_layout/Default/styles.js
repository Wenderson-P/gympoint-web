import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  padding: 30px;
  width: 90%;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: bold;
      font-size: 24px;
      color: #444444;
    }

    margin-bottom: 20px;
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
  form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 4px;
    div {
      display: flex;
      flex-wrap: wrap;
    }
    label {
      display: flex;

      flex-direction: column;
      font-weight: bold;

      font-size: 14px;
      color: #444444;
      text-align: left;
    }

    input {
      margin: 8px 15px;
      padding: 13px 10px;
      font-size: 16px;
      color: #666666;
      text-align: left;

      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
  button {
    background: #ee4d64;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
  }
`;
