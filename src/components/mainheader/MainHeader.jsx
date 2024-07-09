import React,{Fragment,useState} from 'react';
import Cart from '../cart/Cart'
import Mainclasses from './MainHeader.module.css'
import HeaderClasses from './HeaderCart.module.css'
import mealSrc from '../../assets/meal.png'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import CartIcon from '../cart/CartIcon';
function MainHeader(props) {
    const c=useContext(CartContext);
    const [cartlVisibility,setCartVisibility]=useState(false);

    console.log(c
    )
  
    function handleShowCart(e){
       
    setCartVisibility(true)
  }
  function handleHideCart(e){
   
    setCartVisibility(false);
  }
  console.log(cartlVisibility)
  const item=useContext(CartContext);
    return (
        <Fragment>
            <header className={Mainclasses.header}>
                <h1>Today Meals</h1>
                <button className={HeaderClasses.button} onClick={handleShowCart} >
                <span>your cart</span>
                <span className={HeaderClasses.badge}>0</span>
                </button>
                {cartlVisibility
                ? <Cart hideCart={handleHideCart}/>
                :null
                }
                
            </header>
           
            <div  className={Mainclasses['main-image']}>
                
                <img src={mealSrc} alt="" />
            </div>
            
        </Fragment>
    );
}

export default MainHeader;