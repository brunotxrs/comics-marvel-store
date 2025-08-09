import { useEffect, useState, useRef } from 'react';
import { 
    ContainerGridComic, BoxGridComic, 
    Loader, LiComic, ImgComic, H2Comic,
    PriceP, NavDotsContainerComic, NavDotComic, 
    ComicImageContainer, CartIconShopping
} from '../styles';
import { useFetchApiComicVine } from '../../../services/api';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ModuleGridComic(onAddToCart){
    const allComics = useFetchApiComicVine();
    const [ randomComics, setRandomComics ] = useState([]);
    const [ activeDot, setActiveDot ] = useState(0); 
    const containerRef = useRef(null); 

    useEffect(() => {
        if(allComics && allComics.length > 0){
            // Embaralha o array de quadrinhos UMA VEZ
            const shuffled = [...allComics].sort(() => 0.5 - Math.random());
            
            // Pega os 12 primeiros
            const sliced = shuffled.slice(0, 12);
            
            const comicsWithPrice = sliced.map(comic => ({
                ...comic,
                price: (Math.random() * (20 - 5) + 5).toFixed(2) // Gera um preço entre 5 e 20 com 2 casas decimais
            }));
            
            // Separa em 3 listas de 4
            setRandomComics([
                comicsWithPrice.slice(0, 4),
                comicsWithPrice.slice(4, 8),
                comicsWithPrice.slice(8, 12)
            ]);
        } 
    }, [allComics]);

    // Lógica para detectar o scroll e mudar o pontinho ativo
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollLeft = containerRef.current.scrollLeft;
                const clientWidth = containerRef.current.clientWidth;
                // Calcula qual BoxGridComic está visível (0, 1 ou 2)
                const newActiveDot = Math.round(scrollLeft / clientWidth);
                setActiveDot(newActiveDot);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
                return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);


    // Função para rolar para a posição do clique no pontinho
    const scrollToBox = (index) => {
      if (containerRef.current) {
        const boxWidth = containerRef.current.clientWidth;
        containerRef.current.scrollTo({
          left: boxWidth * index,
          behavior: 'smooth'
        });
      }
    };


    return(
        <>
            <ContainerGridComic ref={containerRef}>
                {randomComics.length > 0 ? (
                    randomComics.map((comics, boxIndex) => (
                        <BoxGridComic key={boxIndex}>
                            {comics.map((comic) => (
                                <LiComic key={comic.id}>
                                    <ComicImageContainer>
                                        <ImgComic src={comic.image.original_url} alt={comic.name}/>
                                        <CartIconShopping icon={faCartShopping} onClick={() => onAddToCart(comic)} />
                                    </ComicImageContainer>

                                    <H2Comic>{comic.name}</H2Comic>
                                    <PriceP>R${comic.price}</PriceP>
                                </LiComic>
                            ))}
                        </BoxGridComic>
                    ))
                ) : (
                    <Loader />
                )}
            </ContainerGridComic>

            <NavDotsContainerComic>
                {randomComics.length > 0 && randomComics.map((_, index) => (
                    <NavDotComic
                        key={index}
                        isActive={index === activeDot}
                        onClick={() => scrollToBox(index)}
                    />
                ))}
            </NavDotsContainerComic>
        </>
    );
}

export default ModuleGridComic;