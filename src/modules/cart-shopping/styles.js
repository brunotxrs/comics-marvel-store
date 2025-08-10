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
  font-family: var(--font-nuckle);
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
  width: 370px;
  margin: 0 auto;
  height: 200px;

`;

export const SpanItems = styled.span `
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;

`;

export const ImgItems = styled.img `
  width: 100px;
  height: 150px;

`;

export const BoxInfoItems = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  background: var(--second-color);

`

export const H2InfoItems = styled.h2 `
  font-family: var(--font-nuckle);
  color: var(--third-color);
  font0size: var(--subtitle);
`;

export const PInfoItems = styled.p `
  font-family: var(--font-nuckle);
  color: var(--third-color);
  font0size: var(--title);
`;

export const IconTicket = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);

`;

export const DivIconsItems = styled.div `
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  align-items: center;
  width: 370px;
  margin: auto;
  justify-content: space-evenly;
  padding: 1.25rem 0;
  background: var(--second-color);
  border-top: 1px solid var(--first-color);
`;

export const IconTrash = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);

`;

export const StyleIconMinus = styled(FontAwesomeIcon) `
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);
`;

export const StyleCount = styled.p `
  width: 1.25rem;
  height: 1.25rem;
  font-family: var(--font-nuckle);
  color: var(--first-color);
  text-align: center;
  font-size: var(--title);
`;

export const StyleIconMore = styled(FontAwesomeIcon) `
  width: 1.25rem;
  height: 1.25rem;
  color: var(--first-color);
`
