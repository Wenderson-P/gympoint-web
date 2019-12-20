import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  display: flex;
  background: #ffffff;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 24px;
      margin-left: 30px;
      margin-right: 12px;
    }

    h1 {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;

      color: #ee4d64;
    }

    hr {
      border: none;
      border-left: 1px solid #dddddd;
      height: 32px;
      width: 1px;
      margin: 0px 30px;
    }

    a {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #444444;
      margin-right: 20px;
    }
  }
  aside {
    margin-right: 30px;
    width: 200px;
    h4 {
      line-height: 16px;

      color: #666666;
    }

    button {
      width: 100%;
      font-size: 14px;
      line-height: 16px;
      text-align: center;

      color: #de3b3b;
      border: none;
      background: none;
    }
  }
`;

export const Pages = styled.div``;
