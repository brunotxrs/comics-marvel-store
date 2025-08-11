import { 
    ContainerCart, BoxIconClosed, StyleIconClosed, 
    BoxTotalPay, TextTotalPay, BoxItems,
    UlItems, LiItems, SpanItems, DivIconsItems,
    StyleIconMinus, StyleIconMore, StyleCount,
    ImgItems, BoxInfoItems, H2InfoItems, PInfoItems, 
    IconTrash, IconTicket, TextNoItems, NoItemsCart,
    CouponInputContainer, CouponInput, CouponButton,
    MessageBox, MessageBoxContent, CloseButton
 } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { faClose, faMinus, faPlus, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../store/cartSlice";
import { useState } from "react";




function CartShopping({onCloseCart}){
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [couponInput, setCouponInput] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [message, setMessage] = useState({ text: '', show: false });
    const [isCouponInputVisible, setIsCouponInputVisible] = useState(false);

    // Mapeamento dos cupons disponíveis
    const coupons = {
        'NORMAL10': { type: 'percent', value: 0.10 }, // 10% de desconto no total
        'RARE20': { type: 'rare_percent', value: 0.20 }, // 20% de desconto apenas em itens raros
    };


    // Função para exibir a mensagem na tela
    const showMessage = (text) => {
        setMessage({ text, show: true });
        setTimeout(() => {
            setMessage({ text: '', show: false });
        }, 3000);
    };

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

    // Alterna a visibilidade do campo de cupom
    const handleToggleCouponInput = () => {
        setIsCouponInputVisible(!isCouponInputVisible);
    };



    // Lógica para aplicar o cupom
    const handleApplyCoupon = () => {
        if (cartItems.length === 0) {
            showMessage("O carrinho está vazio. Adicione itens antes de usar um cupom.");
            setCouponInput('');
            return;
        }

        const coupon = coupons[couponInput.toUpperCase()];
        if (coupon) {
            setAppliedCoupon(coupon);
            showMessage(`Cupom ${couponInput.toUpperCase()} aplicado com sucesso!`);
        } else {
            setAppliedCoupon(null);
            showMessage('Cupom inválido. Tente novamente.');
        }
        setCouponInput('');
        setIsCouponInputVisible(false); // Fecha o campo após aplicar
    };



// Calcule o subtotal e o total final
    const calculateFinalTotal = () => {
        let subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
        let discount = 0;
        let total = subtotal;

        if (appliedCoupon) {
            if (appliedCoupon.type === 'percent') {
                discount = subtotal * appliedCoupon.value;
            } else if (appliedCoupon.type === 'rare_percent') {
                const rareItemsTotal = cartItems.filter(item => item.isRare)
                                              .reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
                discount = rareItemsTotal * appliedCoupon.value;
            }
        }

        total = subtotal - discount;

        return { subtotal, discount, total };
    };

    const { subtotal, discount, total } = calculateFinalTotal();

    return(
        <>
            <ContainerCart>
                {message.show && (
                    <MessageBox>
                        <MessageBoxContent>{message.text}</MessageBoxContent>
                        <CloseButton onClick={() => setMessage({ text: '', show: false })}>X</CloseButton>
                    </MessageBox>
                )}

                <BoxIconClosed>
                    <StyleIconClosed icon={faClose} onClick={onCloseCart}/>
                </BoxIconClosed>

                <BoxTotalPay>
                    <TextTotalPay>Subtotal: R$ {subtotal.toFixed(2)}</TextTotalPay>
                    {discount > 0 && (
                        <>
                            <TextTotalPay>Desconto: - R$ {discount.toFixed(2)}</TextTotalPay>
                            <TextTotalPay>Total: R$ {total.toFixed(2)}</TextTotalPay>
                        </>
                    )}
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
                                            
                                            {item.isRare && <IconTicket icon={faTicket} onClick={handleToggleCouponInput}/>}

                                            {!item.isRare && <IconTicket icon={faTicket} onClick={handleToggleCouponInput} />}
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
                {isCouponInputVisible && (
                    <CouponInputContainer>
                        <CouponInput
                            type="text"
                            placeholder="Digite seu cupom"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                        />
                        <CouponButton onClick={handleApplyCoupon}>Aplicar</CouponButton>
                    </CouponInputContainer>
                )}

            </ContainerCart>
        </>
    )

}

export default CartShopping;