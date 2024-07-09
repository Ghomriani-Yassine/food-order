import classes from './Cart.module.css';
import Modal from '../ui/Modal'
import {useState} from 'react'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
const Cart = (props) => {
    const [addedMeals, setAddedMeals] = useState([])
    const c=useContext(CartContext);
    console.log(c)
 const cartItems = (
    <ul className={classes['cart-items']}>
      {c.items.map((item) => (
        <li key={item.name}>{item.name} x{item.amount} <button>+</button><button>-</button></li>
      ))}
    </ul>
  );
  


  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideCart} className={classes['button--alt']}>Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
};

export default Cart;