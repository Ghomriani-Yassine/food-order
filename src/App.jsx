import { Fragment,useState } from 'react'

import './App.css'
import Cart from './components/cart/Cart'
import MainHeader from './components/mainheader/MainHeader'
import Meals from './components/meals/Meals'
import CartContext from './store/Cart-Context'
import CartProvider from './store/CartProvider'
function App() {
  const[items,setItems]=useState([]);
  
  function addItemToCart(item){
    const filteredItem=items.filter((i)=>i.name===item.name);
    filteredItem.amount+=item.amount;
    if(filteredItem.length>0)
    setItems((prevItems)=>[...prevItems,item])
  }
  const contextValue={
    items:items,
    addItem:addItemToCart
  }
  return (
    <CartContext.Provider  value={contextValue}>

    <Fragment>
    
     <MainHeader/>
     
     <main>
      <Meals/>
     </main>
     
    </Fragment>
    </CartContext.Provider>
  )
}

export default App
