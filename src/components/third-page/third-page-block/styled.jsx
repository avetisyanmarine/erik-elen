import styled from "styled-components";
import { Flexible } from "../../../GlobalStyle";

export const ThirdPageBlockPart = styled(Flexible)`
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  
  /* Այստեղ ենք որոշում դիրքը */
  align-items: ${({ direction }) => 
    direction === "right" ? "flex-end" : 
    direction === "left" ? "flex-start" : "center"};
    
  text-align: ${({ direction }) => (direction === "right" ? "right" : "left")};
`;

export const ThirdPageBlockPartSvg = styled.div`
  position: relative;
  img {
    width: 70px;
    height: 100%;
    object-fit: contain;
  }
`;

export const ThirdPageBlockPartContext = styled.div`
  display: flex;
  flex-direction: column;
  /* Տեքստի հավասարեցումը ըստ direction-ի */
  align-items: ${({ direction }) => (direction === "right" ? "flex-end" : "flex-start")};
  gap: 12px;
`;