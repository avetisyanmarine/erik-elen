import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
  h2 {
    width: fit-content;
    margin: 35px auto 10px auto;
  }
  .photo2 {
    margin-top: 50px;
    width: 100%;
  }
   .uniqueone{
    margin-top: 40px;
  }
  h2 {
    margin-bottom: 50px;
  }
`;
const ThirdPagePartContext = styled.div`
  overflow: hidden;
  position: relative;
  .secondBlock {
    margin-left: 19px;
  }
`;
const ThirdPagePartMini = styled.div`
  text-align: center;
  h3 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 31px;
    margin: 20px 0;
  }
  .dzev {
    font-family: ArmAllegrou;
  }
  hr {
    width: 195px;
    margin: auto;
    background: #3d3a3a;
    border: 0;
    height: 2px;
    border-radius: 50px;
  }
`;
const ThirdPagePartCalendar = styled(Flexible)`
  flex-wrap: wrap;
  gap: 10px;
  div {
    text-align: center;
    font-size: 27px;
    flex: 1 0 calc(100% / 7 - 10px);
  }
  .special {
    position: relative;
    &::after {
      content: "";
      width: 45px;
      height: 42px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("/heart.png");
      background-size: cover;
    }
  }
`;

export {
  ThirdPagePart,
  ThirdPagePartContext,
  ThirdPagePartMini,
  ThirdPagePartCalendar,
};
