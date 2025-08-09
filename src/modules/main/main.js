import { MainContainer } from './styles';
import { useFetchApiComicVine, useFetchApiComicVineBackground } from '../../services/api';
import ModuleBoxInfo from './box-info/box_info';
import ModuleBoxComicShop from './box-comic-shop/comic-shop';

function Main() {

  const characters = useFetchApiComicVine();
  const charactersIssues = useFetchApiComicVineBackground();
 
  return (
    <MainContainer>
      <ModuleBoxInfo />

      {/* benefits of ComicShop */}
      <ModuleBoxComicShop />
      
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