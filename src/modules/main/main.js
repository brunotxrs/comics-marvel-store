import { MainContainer, BoxInfo, H2Info, H3Info, PInfo, ButtonInfo, AInfo
} from './styles';
import { useFetchApiComicVine, useFetchApiComicVineBackground } from '../../services/api';
import { useEffect, useState } from 'react';


function Main() {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const characters = useFetchApiComicVine();
  const charactersIssues = useFetchApiComicVineBackground();

  const posterComics = [
    {
      id: 1,
      imgPoster: 'https://comic-perfect.myshopify.com/cdn/shop/files/marvel-stories_600x.webp?v=1676286937',
      title: 'All Store',
      subTitle: 'Confira a coleção de revistas',
      description: 'Explore nosso catálogo completo e encontre os quadrinhos de seus heróis favoritos, edições raras e sagas inesquecíveis.',
      textButton: 'Shop Now',
      linkUrl: '/store/all'
    },
    {
      id: 2,
      imgPoster: 'https://comic-perfect.myshopify.com/cdn/shop/files/comic-stories_600x.webp?v=1676287116',
      title: 'Special offers',
      subTitle: 'Confira a coleção de revistas especiais',
      description: 'Descubra as edições mais cobiçadas e colecionáveis com descontos exclusivos por tempo limitado!',
      textButton: 'Ofertas Especiais',
      linkUrl: '/store/all'
    }
  ]

   useEffect(() => {
    // Seta um intervalo para mudar o índice a cada 5 segundos
    const interval = setInterval(() => {
      setCurrentPosterIndex(prevIndex => (prevIndex + 1) % posterComics.length);
    }, 5000); // 5000ms = 5 segundos

    // Limpa o intervalo quando o componente for desmontado para evitar vazamento de memória
    return () => clearInterval(interval);
  }, [posterComics]); // Dependência: posterComics

  // Pega o item atual a ser exibido
  const currentPoster = posterComics[currentPosterIndex];

 
  return (
    <MainContainer>
      <BoxInfo key={currentPoster.id}>
        <img src={currentPoster.imgPoster}/>
        <H2Info>{currentPoster.title}</H2Info>
        <H3Info>{currentPoster.subTitle}</H3Info>
        <PInfo>{currentPoster.description}</PInfo>
        <ButtonInfo>
          <AInfo href={currentPoster.linkUrl}>{currentPoster.textButton}</AInfo>
        </ButtonInfo>

      </BoxInfo>

      {/* this area for exhibition for Magazine Comics */}
      {/* {characters.map((character) => (
        <li key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image.original_url} alt={character.name} />
        </li>
      ))} */}
    </MainContainer>
  );
}

export default Main;