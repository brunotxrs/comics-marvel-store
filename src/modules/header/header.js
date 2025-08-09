import {  
    Container, BoxLeft, 
    Img, BoxRight, CountCart, 
    StyleIcon  } from './styles'
import logoCMS from '../../assets/svg/logo-comics-marvel-store.svg'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header(){



    return(
        <>
            <Container>
                <BoxLeft>
                    <StyleIcon icon={faBars} />
                </BoxLeft>

                <StyleIcon icon={faUser} />
                    <Img src={logoCMS} alt="Comics Marvel Store Logo"/>
            

                <BoxRight>
                    <CountCart>0</CountCart>
                    <StyleIcon icon={faCartShopping} />
                </BoxRight>

            </Container>
        </>
    )
}

export default Header;