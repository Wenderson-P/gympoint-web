import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  padding: 30px;
  width: 70%;
  margin: 0 auto;

  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #444444;
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

  form {
    padding: 30px;
    div {
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
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border-radius: 4px;
      fieldset {
        padding: 8px 15px;
        width: 100%;

        label {
          font-weight: bold;
          font-size: 14px;
          color: #444444;
          text-align: left;
        }

        input {
          margin: 8px;
          padding: 13px 10px;
          font-size: 16px;
          color: #666666;
          text-align: left;

          border: 1px solid #dddddd;
          box-sizing: border-box;
          border-radius: 4px;
        }
      }
    }
  }
`;
