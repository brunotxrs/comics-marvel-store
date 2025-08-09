import { useEffect, useState, useRef } from 'react';
import { 
    ContainerGridComic, BoxGridComic, 
    Loader, LiComic, ImgComic, H2Comic,
    PriceP, NavDotsContainerComic, NavDotComic
} from '../styles';
import { useFetchApiComicVine } from '../../../services/api';


function ModuleGridComic(){
    const allComics = useFetchApiComicVine();
    const [ randomComics, setRandomComics ] = useState([]);
    const [ activeDot, setActiveDot ] = useState(0); // Novo estado para o pontinho ativo
    const containerRef = useRef(null); // Para referenciar o DOM do container

    useEffect(() => {
        if(allComics.length > 0){
            // Embaralha o array de quadrinhos UMA VEZ
            const shuffled = [...allComics].sort(() => 0.5 - Math.random());
            
            // Pega os 12 primeiros (ou 10, dependendo do seu limit)
            const sliced = shuffled.slice(0, 12);
            
            // Separa em 3 listas de 4
            setRandomComics([
                sliced.slice(0, 4),
                sliced.slice(4, 8),
                sliced.slice(8, 12)
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
                                    <ImgComic src={comic.image.original_url} alt={comic.name}/>
                                    <H2Comic>{comic.name}</H2Comic>
                                    <PriceP>0.0</PriceP>
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