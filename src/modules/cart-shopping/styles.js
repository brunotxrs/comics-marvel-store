import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ContainerCart = styled.section  `
  position: fixed;
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
  padding: 1.25rem;
  overflow: hidden;

`;

export const BoxIconClosed = styled.span `
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const StyleIconClosed = styled(FontAwesomeIcon) `
  width: 1.875rem;
  height: 1.875rem;
  color: var(--first-color);

`;

export const BoxTotalPay = styled.div `
  width: 100%;
  padding: 0 0 0.625rem 0;

`;

export const TextTotalPay = styled.h2 `
  color: var(--second-color);

`;

export const BoxItems = styled.div `
  width: 100%;
  height: 100%;

`;

export const UlItems = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1.25rem 0;
  overflow-y: scroll;
  height: 95%;
  scrollbar-width: none;
 
`;

export const LiItems = styled.li `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

`;

export const SpanItems = styled.span `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

`;

export const ImgItems = styled.img `
  width: 50%;
  height: 100%;

`;

export const BoxInfoItems = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;

`

export const H2InfoItems = styled.h2 `

`;

export const PInfoItems = styled.p `

`;

export const DivIconsItems = styled.div `
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
  padding: 1.25rem 0;
  background: var(--second-color);

`;

export const StyleIconMinus = styled(FontAwesomeIcon) `
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);
`;

export const StyleCount = styled.p `
  width: 1.25rem;
  height: 1.25rem;
  color: var(--third-color);
`;

export const StyleIconMore = styled(FontAwesomeIcon) `
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);
`
