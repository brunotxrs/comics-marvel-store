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

export const BoxTotalPay = styled.div `
  outline: 1px solid #fff;
  width: 100%;

`;

export const TextTotalPay = styled.h2 `
  outline: 1px solid #fff;
  color: #fff;

`;

export const BoxItems = styled.div `
  outline: 1px solid #fff;

`;

export const UlItems = styled.ul `
  outline: 1px solid orange;
  width: 350px;
`;

export const LiItems = styled.li `
  outline: 1px solid #fff;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;

`;

export const SpanItems = styled.span `
  outline: 1px solid red;
  width: 100%;
  height: 100%;

`

export const ImgItems = styled.img `
  width: 100%;
  outline: 1px solid red;

  `

export const DivIconsItems = styled.div `
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  width: 50%;
  outline: 1px solid;
  justify-content: space-evenly;
`
export const StyleIconMinus = styled(FontAwesomeIcon) `
  width: 20px;
  height: 20px;
  color: var(--first-color);
`

export const StyleCount = styled.p `
  width: 20px;
  height: 20px;
  color: var(--second-color);
`

export const StyleIconMore = styled(FontAwesomeIcon) `
  width: 20px;
  height: 20px;
  color: var(--first-color);
`




