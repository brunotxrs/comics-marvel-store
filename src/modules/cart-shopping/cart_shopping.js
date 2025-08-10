import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { 
    ContainerCart, BoxIconClosed, StyleIconClosed, 
    BoxTotalPay, TextTotalPay, BoxItems,
    UlItems, LiItems, SpanItems, DivIconsItems,
    StyleIconMinus, StyleIconMore, StyleCount,
    ImgItems
 } from "./styles";




function CartShopping({onCloseCart}){


    return(
        <>
            <ContainerCart>
                <BoxIconClosed>
                    <StyleIconClosed icon={faClose} onClick={onCloseCart}/>
                </BoxIconClosed>
                <BoxTotalPay>
                    <TextTotalPay>Subtotal: {}</TextTotalPay>
                </BoxTotalPay>

                <BoxItems>
                    <UlItems>
                        <LiItems>
                            <SpanItems>
                                {/* <ImgItems src={} /> */}

                            </SpanItems>

                            <DivIconsItems>
                                <StyleIconMinus icon={faMinus}/>
                                <StyleCount>{0}</StyleCount>
                                <StyleIconMore icon={faPlus}/>
                            </DivIconsItems>
                        </LiItems>
                    </UlItems>

                </BoxItems>



            </ContainerCart>
        </>
    )

}

export default CartShopping;