import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
  max-width: 100%;
  overflow-x: hidden;
}
  body {
    font-family: DavelAghvor;
    letter-spacing: 1px;
    background-color: #F1E9E0;
  }
  @font-face {
    font-family: 'ArmAllegrou';
    src: url("/font/ArmAllegroU.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "DavelAghvor";
    src: url("/font/davel-aghvor.otf");
    font-display: swap;
  }
  h3 {
    font-size: 24px;
  }
  .english {
    font-family: cursive;
  }
  h2 {
    font-size: 36px;
    font-weight: 100;
  }
  h1 {
    font-size: 80px;
    font-family: ArmAllegrou;
    color: #fefefe;
    font-weight: 400;
    text-shadow: rgba(0, 0, 0, 0.7) 2px 2px 6px;  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
