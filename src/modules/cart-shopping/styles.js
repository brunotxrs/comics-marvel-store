import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ContainerCart = styled.section  `
  position: fixed; /* Isso faz o componente ficar por cima de tudo */
  top: 0;
  left: 0;
  width: 100%;
  height: 94%;
  background-color: var(--third-color); 
  z-index: 100; 
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
  color: var(--second-colo); 
  padding: 20px;
`;
export const BoxIconClosed = styled.span `
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const StyleIconClosed = styled(FontAwesomeIcon) `
    width: 30px;
    height: 30px;
    color: var(--first-color);
`;