import { BoxComicShopDiv, ComicShopDiv, ImgComicShop, DivComicShop, H2ComicShop, ParagraphComicShop } from "../styles";

function ModuleBoxComicShop(){
    const _ComicShop = [
        {
            id: 1,
            imgComicShop: 'https://comic-perfect.myshopify.com/cdn/shop/t/2/assets/4-track.svg?v=66972495813929308381676109948',
            h2ComicShop: 'Frete grátis',
            PComicShop: 'Frete grátis para pedidos acima de R$ 99.'
        },
        {
            id: 2,
            imgComicShop: 'https://comic-perfect.myshopify.com/cdn/shop/t/2/assets/9-money.svg?v=64672271261320180421676109949',
            h2ComicShop: 'Reembolso',
            PComicShop: 'Garantia de reembolso de 15 dias.'
        },
        {
            id: 3,
            imgComicShop: 'https://comic-perfect.myshopify.com/cdn/shop/t/2/assets/10-credit-card.svg?v=67535653142018273091676109948',
            h2ComicShop: 'Checkout seguro',
            PComicShop: 'Garantimos 100% de segurança no pagamento.'
        }
    ]



    return (
        <BoxComicShopDiv>
            {_ComicShop.map((e) => {

                return(
                    <ComicShopDiv key={e.id}>

                        <ImgComicShop src={e.imgComicShop}/>

                        <DivComicShop>
                            <H2ComicShop>{e.h2ComicShop}</H2ComicShop>
                            <ParagraphComicShop>{e.PComicShop}</ParagraphComicShop>
                        </DivComicShop>
                    </ComicShopDiv>
                )
            })}
        </BoxComicShopDiv>

    )

}


export default ModuleBoxComicShop;