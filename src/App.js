import { useState } from 'react';
import Header from './modules/header/header';
import Main from './modules/main/main';
import CartShopping from './modules/cart-shopping/cart_shopping';
import ComicDetails from './modules/details/comicDetails';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);

  const toggleCart = () => {
    // Inverte o valor de 'isCartOpen' para abrir ou fechar o carrinho
    setIsCartOpen(!isCartOpen);
  };

  const toggleDetails = (comic) => {
    setIsDetailsOpen(!isDetailsOpen);
    setSelectedComic(comic);
  }



  return (
    <>
      <Header onCartClick={toggleCart} />
      {isCartOpen && <CartShopping onCloseCart={toggleCart}/>}


      <Main detailsComic={toggleDetails}/>
      {isDetailsOpen && <ComicDetails comic={selectedComic} onClose={toggleDetails}/>}
    
    </>
  );
}

export default App;
