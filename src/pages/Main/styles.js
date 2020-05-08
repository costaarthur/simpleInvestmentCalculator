import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* background: #e8eaef; */

  div.title-box {
    display: flex;
    background: #040404;
    width: 500px;
    height: 220px;
    margin: auto auto;
    align-items: center;
    justify-content: center;

    h1 {
      color: #e4d3af;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 460px;
    margin: 25px auto 0;

    label {
      color: #e4d3af;
      font-weight: bold;
    }

    input {
      border: 0;
      border-bottom: 1px solid #a7a9af;
      margin: 5px 0 16px 0;
    }

    button {
      border: none;
      background: #e4d3af;
      color: #fff;
      font-weight: bold;
      width: 120px;
      height: 50px;
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto 0;
    }
  }
`;
