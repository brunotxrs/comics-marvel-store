import {  
    Container, BoxLeft, 
    Img, BoxRight, CountCart, 
    StyleIcon  } from './styles'
import logoCMS from '../../assets/svg/logo-comics-marvel-store.svg'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header(){



    return(
        <>
            <Container>
                <BoxLeft>
                    <StyleIcon icon={faBars} />
                </BoxLeft>

                <figure>
                    <Img src={logoCMS} alt="Comics Marvel Store Logo"/>
                </figure>

                <BoxRight>
                    <CountCart>0</CountCart>
                    <StyleIcon icon={faShoppingCart} />
                </BoxRight>

            </Container>
        </>
    )
}

export default Header;