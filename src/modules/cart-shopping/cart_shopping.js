import { 
    ContainerCart, BoxIconClosed, StyleIconClosed, 
    BoxTotalPay, TextTotalPay, BoxItems,
    UlItems, LiItems, SpanItems, DivIconsItems,
    StyleIconMinus, StyleIconMore, StyleCount,
    ImgItems, BoxInfoItems, H2InfoItems, PInfoItems, 
    IconTrash, IconTicket, TextNoItems, NoItemsCart
 } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { faClose, faMinus, faPlus, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../store/cartSlice";




function CartShopping({onCloseCart}){
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calcule o subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);

    // Função para remover o item
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    // Função para incrementar item
    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    }

    // Função para Decrementar item
    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    }

    return(
        <>
            <ContainerCart>
                <BoxIconClosed>
                    <StyleIconClosed icon={faClose} onClick={onCloseCart}/>
                </BoxIconClosed>
                <BoxTotalPay>
                    <TextTotalPay>Subtotal: R$ {subtotal.toFixed(2)}</TextTotalPay>
                </BoxTotalPay>

                <BoxItems>
                    <UlItems>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <LiItems key={item.id}>
                                    <SpanItems>
                                        <ImgItems src={item.image.original_url} alt={item.name} />

                                        <BoxInfoItems>
                                            <H2InfoItems>{item.name}</H2InfoItems>
                                            <PInfoItems>R$ {item.price}</PInfoItems>
                                            <IconTicket icon={faTicket}/>
                                        </BoxInfoItems>
                                    </SpanItems>

                                    <DivIconsItems>
                                        <IconTrash icon={faTrashCan} onClick={() => handleRemoveFromCart(item.id)}/>
                                            
                                        <StyleIconMinus icon={faMinus} onClick={() => handleDecrementQuantity(item.id)}/>

                                        <StyleCount>{item.quantity}</StyleCount>

                                        <StyleIconMore icon={faPlus} onClick={() => handleIncrementQuantity(item.id)}/>
                                    </DivIconsItems>
                                </LiItems>
                            ))
                        ): (
                            <>
                                <NoItemsCart icon={faCircleXmark}/>
                                <TextNoItems>O carrinho está vazio.</TextNoItems>
                            </>
                        )}
                    </UlItems>

                </BoxItems>



            </ContainerCart>
        </>
    )

}

export default CartShopping;