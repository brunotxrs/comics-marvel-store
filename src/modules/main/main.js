import ModuleBanners from './box-banner/banners';
import ModuleBoxInfo from './box-info/box_info';
import ModuleBoxComicShop from './box-comic-shop/comic-shop';
import { MainContainer, TextH2, ParagraphP } from './styles';
import ModuleGridComic from './box-grid-comic/grid_comic';



function Main() {
 
  return (
    <MainContainer>
      <ModuleBoxInfo />

      {/* benefits of ComicShop */}
      <ModuleBoxComicShop />

      {/* area for banner */}
      <ModuleBanners />

      {/* here one text */}
      <TextH2>Novas chegadas</TextH2>
      <ParagraphP>Existem muitas variações de passagens</ParagraphP>

      {/* this area for exhibition for Magazine Comics */}
      <ModuleGridComic />

    </MainContainer>
  );
}

export default Main;