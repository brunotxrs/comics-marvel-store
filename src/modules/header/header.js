import {  
    Container, BoxLeft, Img, BoxRight, 
    CountCart, StyleIcon, BoxIconUser, 
    ContainNavBar, SpanNavBar  } from './styles'
import logoCMS from '../../assets/svg/logo-comics-marvel-store.svg';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';

function Header({onCartClick}){
    const totalItemCart = useSelector(state => state.cart.items);
    // total de items no carrinho
    const totalItem = totalItemCart.reduce((e, i) => (e + i.quantity), 0)

    return(
        <>
            <Container>
                <BoxLeft>
                    <StyleIcon icon={faBars} />
                </BoxLeft>

                <BoxIconUser>
                    <StyleIcon icon={faUser} />
                </BoxIconUser>

                    <Img src={logoCMS} alt="Comics Marvel Store Logo"/>
            
                {totalItemCart.length > 0 ? (
                    totalItemCart.map((total) => (
                        <BoxRight key={total.id} onClick={onCartClick} data-testid="icone-do-carrinho">
                            <CountCart>{totalItem}</CountCart>
                            <StyleIcon icon={faCartShopping}/>
                        </BoxRight>
                    ))
                ):(
                    <BoxRight onClick={onCartClick} data-testid="icone-do-carrinho">
                        <CountCart>0</CountCart>
                        <StyleIcon icon={faCartShopping} />
                    </BoxRight>
                )}
                <ContainNavBar>
                    <SpanNavBar>Homer</SpanNavBar>
                    <SpanNavBar>Shopping</SpanNavBar>
                    <SpanNavBar>Collations</SpanNavBar>
                </ContainNavBar>
                

            </Container>
        </>
    )
}

export default Header;