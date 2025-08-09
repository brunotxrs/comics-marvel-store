import { BoxInfo, ImgPoster, DivInfo, H2Info, H3Info, PInfo, ButtonInfo, AInfo, NavDot, NavDotsContainer } from '../styles';

import { useEffect, useState } from 'react';

function ModuleBoxInfo(){
    const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

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
        <>
            <BoxInfo key={currentPoster.id}>
                <ImgPoster src={currentPoster.imgPoster}/>

                <DivInfo>
                    <H2Info>{currentPoster.title}</H2Info>
                    <H3Info>{currentPoster.subTitle}</H3Info>
                    <PInfo>{currentPoster.description}</PInfo>
                    <ButtonInfo>
                    <AInfo href={currentPoster.linkUrl}>{currentPoster.textButton}</AInfo>
                    </ButtonInfo>
                </DivInfo>

                <NavDotsContainer>
                    {posterComics.map((_, index) => (
                        <NavDot 
                            key={index}
                            // Define a cor do pontinho com base no índice atual
                            isActive={index === currentPosterIndex}
                            // Ao clicar, muda o estado para o índice do pontinho clicado
                            onClick={() => setCurrentPosterIndex(index)}
                        />
                    ))}
                </NavDotsContainer>


            </BoxInfo>
        </>
    )
}

export default ModuleBoxInfo;