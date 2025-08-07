import {  
    Container, Box_left, 
    Img, Box_right, Count_Cart, 
    StyleIcon  } from './styles'
import logoCMS from '../../assets/svg/logo-comics-marvel-store.svg'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header(){



    return(
        <>
            <Container>
                <Box_left>
                    <StyleIcon icon={faBars} />
                </Box_left>

                <figure>
                    <Img src={logoCMS} alt="Comics Marvel Store Logo"/>
                </figure>

                <Box_right>
                    <Count_Cart>0</Count_Cart>
                    <StyleIcon icon={faShoppingCart} />
                </Box_right>

            </Container>
        </>
    )
}

export default Header;