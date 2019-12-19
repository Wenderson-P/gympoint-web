import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  img {
    margin-top: 50px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #ee4d64;
    margin-bottom: 30px;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
      margin-bottom: 8px;
    }

    input {
      height: 45px;
      padding: 0 15px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      margin-bottom: 20px;
    }

    input::placeholder {
      color: #999999;
    }

    span {
      color: #ee4d64;
      font-weight: bold;
      margin-bottom: 10px;
    }

    button {
      height: 45px;
      margin-bottom: 50px;
      background: #ee4d64;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      font-weight: bold;
      line-height: 19px;
      color: #ffffff;
    }
  }
`;
