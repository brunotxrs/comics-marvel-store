import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ContainerCart, BoxIconClosed, StyleIconClosed } from "./styles";




function CartShopping({onCloseCart}){


    return(
        <>
            <ContainerCart>
                <BoxIconClosed>
                    <StyleIconClosed icon={faClose} onClick={onCloseCart}/>

                </BoxIconClosed>



            </ContainerCart>
        </>
    )

}

export default CartShopping;