import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.main `
  background: var(--second-color);
`;


export const BoxInfo = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 15px 30px;
  
`

export const H2Info = styled.h2 `
  color: var(--first-color);
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  margin-bottom: 15px;
  animation: ${slideUp} 0.9s ease-out;
`

export const H3Info = styled.h3 `
  color: var(--third-color);
  font-size: var(--subtitle);
  font-family: var(--font-nuckle);
  margin-bottom: 15px;
  animation: ${slideUp} 0.9s ease-out;
`

export const PInfo = styled.p `
  color: var(--third-color);
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  margin-bottom: 20px;
  line-height: 200%;
  animation: ${slideUp} 1.0s ease-out;
`

export const ButtonInfo = styled.button `
  outline: none;
  border: none;
  width: 150px;
  height: 50px;
  background: var(--first-color);
  border-radius: 4px;
  animation: ${slideUp} 1.0s ease-out;
`

export const AInfo = styled.a `
  color: var(--second-color);
  width: 100%;
  height: 100%;
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  text-decoration: none;
  padding: 5px 0;

`