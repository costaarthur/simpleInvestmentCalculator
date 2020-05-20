import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 900px;
  background-image: linear-gradient(
      12deg,
      rgba(193, 193, 193, 0.05) 0%,
      rgba(193, 193, 193, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 100%
    ),
    linear-gradient(
      321deg,
      rgba(240, 240, 240, 0.05) 0%,
      rgba(240, 240, 240, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 100%
    ),
    linear-gradient(
      236deg,
      rgba(189, 189, 189, 0.05) 0%,
      rgba(189, 189, 189, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 100%
    ),
    linear-gradient(
      96deg,
      rgba(53, 53, 53, 0.05) 0%,
      rgba(53, 53, 53, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 100%
    ),
    linear-gradient(334deg, hsl(247, 0%, 2%), hsl(247, 0%, 2%));

  div.title-box {
    display: flex;
    /* background: #040404; */
    width: 500px;
    height: 100px;
    margin: 70px auto;
    align-items: center;
    justify-content: center;

    h1 {
      color: #e4d3af;
      font-size: 15px;
      margin-left: 10px;
      text-align: center;
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

  div.result {
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(
        circle at center center,
        transparent,
        rgb(255, 255, 255)
      ),
      linear-gradient(
        309deg,
        rgba(90, 90, 90, 0.05) 0%,
        rgba(90, 90, 90, 0.05) 50%,
        rgba(206, 206, 206, 0.05) 50%,
        rgba(206, 206, 206, 0.05) 100%
      ),
      linear-gradient(
        39deg,
        rgba(13, 13, 13, 0.05) 0%,
        rgba(13, 13, 13, 0.05) 50%,
        rgba(189, 189, 189, 0.05) 50%,
        rgba(189, 189, 189, 0.05) 100%
      ),
      linear-gradient(
        144deg,
        rgba(249, 249, 249, 0.05) 0%,
        rgba(249, 249, 249, 0.05) 50%,
        rgba(111, 111, 111, 0.05) 50%,
        rgba(111, 111, 111, 0.05) 100%
      ),
      linear-gradient(
        166deg,
        rgba(231, 231, 231, 0.05) 0%,
        rgba(231, 231, 231, 0.05) 50%,
        rgba(220, 220, 220, 0.05) 50%,
        rgba(220, 220, 220, 0.05) 100%
      ),
      linear-gradient(
        212deg,
        rgba(80, 80, 80, 0.05) 0%,
        rgba(80, 80, 80, 0.05) 50%,
        rgba(243, 243, 243, 0.05) 50%,
        rgba(243, 243, 243, 0.05) 100%
      ),
      radial-gradient(
        circle at center center,
        hsl(107, 19%, 100%),
        hsl(107, 19%, 100%)
      );

    height: 220px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    h1 {
      color: #e4d3af;
      font-weight: bold;
      font-size: 24px;
    }
  }
`;
