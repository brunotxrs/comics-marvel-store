import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { 
    ContainerCart, BoxIconClosed, StyleIconClosed, 
    BoxTotalPay, TextTotalPay, BoxItems,
    UlItems, LiItems, SpanItems, DivIconsItems,
    StyleIconMinus, StyleIconMore, StyleCount,
    ImgItems, BoxInfoItems, H2InfoItems, PInfoItems
 } from "./styles";
import { useSelector } from "react-redux";




function CartShopping({onCloseCart}){
    const cartItems = useSelector(state => state.cart.items);

    // Calcule o subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);


    return(
        <>
            <ContainerCart>
                <BoxIconClosed>
                    <StyleIconClosed icon={faClose} onClick={onCloseCart}/>
                </BoxIconClosed>
                <BoxTotalPay>
                    <TextTotalPay>Subtotal: {subtotal.toFixed(2)}</TextTotalPay>
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
                                        </BoxInfoItems>
                                    </SpanItems>

                                    <DivIconsItems>
                                        <StyleIconMinus icon={faMinus}/>
                                        <StyleCount>{0}</StyleCount>
                                        <StyleIconMore icon={faPlus}/>
                                    </DivIconsItems>
                                </LiItems>
                            ))
                        ): (
                            <p>O carrinho está vazio.</p>
                        )}
                    </UlItems>

                </BoxItems>



            </ContainerCart>
        </>
    )

}

export default CartShopping;