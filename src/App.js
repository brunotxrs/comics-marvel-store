import { useState } from 'react';
import Header from './modules/header/header';
import Main from './modules/main/main';
import CartShopping from './modules/cart-shopping/cart_shopping';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

   const toggleCart = () => {
    // Inverte o valor de 'isCartOpen' para abrir ou fechar o carrinho
    setIsCartOpen(!isCartOpen);
  };



  return (
    <>
      <Header onCartClick={toggleCart} />
      {isCartOpen && <CartShopping onCloseCart={toggleCart}/>}
      <Main />
    
    </>
  );
}

export default App;
