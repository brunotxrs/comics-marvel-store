import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.main `
  
`;

export const BoxInfo = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0.9375rem 4rem;
  background: var(--second-color);

  @media screen and (width > 48rem) {
    flex-direction: row;
    position: relative;
    height: 100%;
    padding: 1.875rem;
  
  }

  @media screen and (width > 64rem) {
    padding: 4.0625rem 3.125rem;
  
  }

  @media screen and (width > 64rem) and (orientation: landscape) {
    max-width: 80rem;
    margin: auto;
  }
  
`

export const ImgPoster = styled.img `
  width: 100%;

  @media screen and (width > 48rem) {
    position: absolute;
    top:0;
    right: 0;
    width: 18.75rem;
  
  }

  @media screen and (width > 64rem) {
    top: 0;
    right: 0;
    width: 25rem;
  }

  @media screen and (width > 64rem) and (orientation: landscape) {
      right: 10%;
  }
  
`

export const DivInfo = styled.div `
  @media screen and (width > 48rem) {
    width: 25rem;
  
  }

  @media screen and (width > 64rem) {
    width: 31.25rem;
  
  }
`

export const H2Info = styled.h2 `
  color: var(--first-color);
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  margin-bottom: 0.9375rem;
  animation: ${slideUp} 0.9s ease-out;
`

export const H3Info = styled.h3 `
  color: var(--third-color);
  font-size: var(--subtitle);
  font-family: var(--font-nuckle);
  margin-bottom: 0.9375rem;
  animation: ${slideUp} 0.9s ease-out;
`

export const PInfo = styled.p `
  color: var(--third-color);
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  margin-bottom: 1.25rem;
  line-height: 200%;
  animation: ${slideUp} 1.0s ease-out;
`

export const ButtonInfo = styled.button `
  outline: none;
  border: none;
  width: 9.375rem;
  height: 3.125rem;
  background: var(--first-color);
  border-radius: 0.25rem;
  animation: ${slideUp} 1.0s ease-out;
`

export const AInfo = styled.a `
  color: var(--second-color);
  width: 100%;
  height: 100%;
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  text-decoration: none;
  padding: 0.3125rem 0;

`

export const NavDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavDot = styled.span`
  cursor: pointer;
  height: 0.625rem;
  width: 0.625rem;
  margin: 0 0.3125rem;
  background-color: ${props => props.isActive ? 'var(--first-color)' : 'var(--third-color)'};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: var(--first-color);
  }
`;

export const BoxComicShopDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  padding: 1.25rem 0; 
  margin: 1.25rem auto;
  background: var(--second-color);

`;

export const ComicShopDiv = styled.div `
  width: 6.25rem;
  height: 15.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ImgComicShop = styled.img `
  width: 3.125rem;
  height: 3.125rem
`

export const DivComicShop = styled.div `
  height: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;
`

export const H2ComicShop = styled.h2 `
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  color: var(--third-color);
  height: 3.125rem;
  text-align: center;
  align-content: start;
  padding: 0.625rem 0 0 0;
`

export const ParagraphComicShop = styled.p `
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  color: var(--third-color);
  text-align: center;
  align-content: center;

`; 