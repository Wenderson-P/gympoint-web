import styled from 'styled-components';

export const Container = styled.div``;

export const Table = styled.table`
  width: 70%;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 4px;
  padding: 30px;

  th {
    text-align: left;
  }

  tbody {
    tr {
      height: 100%;
      padding: 16px 0px;
      border: 1px solid black;
    }
    td {
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        text-align: right;
      }
    }
  }
  .popup-content {
    border-radius: 5px;
    height: 60%;
    width: 30% !important;
  }
`;

export const AnswerButton = styled.button`
  background: none !important;
  color: #4d85ee !important;
  text-align: right !important;
  font-weight: normal !important;
`;

export const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;

  span {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    text-align: justify;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    color: #666666;
  }
  textarea {
    border: 1px solid gray;
    resize: none;
    width: 100%;
    height: 100%;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const ModalCloseButton = styled.button`
  margin-top: 20px;
  width: 100%;
`;
