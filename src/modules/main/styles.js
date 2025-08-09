import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
  position: relative;

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
  
`;

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
  
`;

export const DivInfo = styled.div `
  @media screen and (width > 48rem) {
    width: 25rem;
  
  }

  @media screen and (width > 64rem) {
    width: 31.25rem;
  
  }
`;

export const H2Info = styled.h2 `
  color: var(--first-color);
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  margin-bottom: 0.9375rem;
  animation: ${slideUp} 0.9s ease-out;
`;

export const H3Info = styled.h3 `
  color: var(--third-color);
  font-size: var(--subtitle);
  font-family: var(--font-nuckle);
  margin-bottom: 0.9375rem;
  animation: ${slideUp} 0.9s ease-out;
`;

export const PInfo = styled.p `
  color: var(--third-color);
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  margin-bottom: 1.25rem;
  line-height: 200%;
  animation: ${slideUp} 1.0s ease-out;
`;

export const ButtonInfo = styled.button `
  outline: none;
  border: none;
  width: 9.375rem;
  height: 3.125rem;
  background: var(--first-color);
  border-radius: 0.25rem;
  animation: ${slideUp} 1.0s ease-out;
`;

export const AInfo = styled.a `
  color: var(--second-color);
  width: 100%;
  height: 100%;
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  text-decoration: none;
  padding: 0.3125rem 0;

`;

// area para interação do os pontos 
export const NavDotsContainer = styled.div`
  width: 4.375rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  position: absolute;
  top: calc(100% - 5%);
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

// area de estilos do componente info sobre benefícios
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
`;

export const ImgComicShop = styled.img `
  width: 3.125rem;
  height: 3.125rem
`;

export const DivComicShop = styled.div `
  height: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;
`;

export const H2ComicShop = styled.h2 `
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  color: var(--third-color);
  height: 3.125rem;
  text-align: center;
  align-content: start;
  padding: 0.625rem 0 0 0;
`;

export const ParagraphComicShop = styled.p `
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  color: var(--third-color);
  text-align: center;
  align-content: center;

`;

// this area to styles of component banners
export const BoxBanner = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 0 0 1.25rem 0;
  gap: 1.25rem;
  
`;

export const LiBanner = styled.li `
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
`

export const ImgBanner = styled.img `
  width: 100%;
  height: 100%;

  transition: transform 2s ease-in-out;
  ${LiBanner}:hover & {
    transform: scale(1.1);
  }
`
// this area for Spinner
const prixClipFix = keyframes`
  0%   { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
  25%  { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
  50%  { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
  75%  { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%); }
  100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0); }
`;

export const Loader = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.625rem solid var(--second-color);
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;
  margin: auto;

  // 3. Estilize o pseudo-elemento ::before
  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    inset: -0.625rem;
    border-radius: 50%;
    border: 0.625rem solid var(--first-color);
    animation: ${prixClipFix} 2s infinite linear;
  }
`;

// this are for exhibition one text of information
export const TextH2 = styled.h2 `
  color: var(--third-color);
  font-size: var(--subtitle);
  font-family: var(--font-nuckle);
  text-align: center;
  margin-bottom: 0.9375rem;
`;

export const ParagraphP = styled.p `
  color: var(--third-color);
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  margin-bottom: 1.25rem;
  text-align: center;
`;

// here area for styles GridComic
export const ContainerGridComic = styled.div `
  display: flex;
  flex-wrap: nowrap; /* Impede a quebra de linha dos boxes */
  overflow-x: scroll; /* Habilita o scroll horizontal */
  scroll-behavior: smooth; /* Anima o scroll ao clicar nos pontinhos */
  scroll-snap-type: x mandatory; /* Faz os boxes "encaixarem" ao rolar */
  -webkit-overflow-scrolling: touch; /* Melhora a rolagem em dispositivos iOS */
  
  /* Esconde a barra de rolagem (opcional, mas comum) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxGridComic = styled.ul `
  flex: 0 0 100%; /* Faz com que cada BoxGridComic ocupe 100% da largura do container */
  scroll-snap-align: center; /* Centraliza o box na tela ao rolar */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  padding: 1.25rem;

`;

export const LiComic = styled.li `
  height: 100%;
  list-style: none;
  
`;

export const ImgComic = styled.img `
  height: 15.625rem;
  width: 100%;
`;

export const PriceP = styled.p `
  color: var(--third-color);
  font-size: var(--paragraph);
  font-family: var(--font-nuckle);
  text-align: center;
  padding: 0.3125rem 0 0 0 ;

`;

export const H2Comic = styled.h2 `
  font-size: var(--title);
  font-family: var(--font-cabinet_grotesk);
  color: var(--third-color);
  text-align: center;
  align-content: start;
`;

export const NavDotsContainerComic = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  position: relative;
  z-index: 10;
  padding: 0 0 3.125rem 0;
`;

export const NavDotComic = styled.span`
  cursor: pointer;
  height: 0.75rem;
  width: 0.75rem;
  margin: 0 0.5rem;
  background-color: ${props => props.isActive ? 'var(--first-color)' : 'var(--third-color)'};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
`;

export const ComicImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CartIconShopping = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: var(--first-color);
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px var(--third-color);
  transition: transform 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;