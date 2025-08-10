import { useDispatch } from 'react-redux';
import { faClose, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../store/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    ContainerDetails, BoxClose, StyleIconClose,
    ImgDetail, BoxInfo, H2Detail, PDetail,
    BoxAction, PriceDetail, ButtonAction,
} from "./styles";

function ComicDetails({ comic, onClose }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (comic) {
            dispatch(addToCart(comic));
            onClose(); // Fecha os detalhes após adicionar ao carrinho
        }
    };

    // Função para limpar as tags HTML da string
    const cleanHtmlText = (htmlString) => {
        if (!htmlString) return "Nenhuma descrição disponível para este quadrinho.";
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };


    if (!comic) {
        return null; // Não renderiza nada se não houver quadrinho
    }

    const cleanedDescription = cleanHtmlText(comic.description);

    return (
        <ContainerDetails>
            <BoxClose>
                <StyleIconClose icon={faClose} onClick={onClose} />
            </BoxClose>

            <ImgDetail src={comic.image.original_url} alt={comic.name} />

            <BoxInfo>
                <H2Detail>{comic.name}</H2Detail>
                <PDetail>
                    {cleanedDescription || "Nenhuma descrição disponível para este quadrinho."}
                </PDetail>
            </BoxInfo>

            <BoxAction>
                <PriceDetail>R$ {comic.price}</PriceDetail>
                <ButtonAction onClick={handleAddToCart}>
                    Adicionar ao Carrinho
                    <FontAwesomeIcon icon={faCartPlus} />
                </ButtonAction>
            </BoxAction>
        </ContainerDetails>
    );
}

export default ComicDetails;
