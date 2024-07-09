import React,{useRef} from 'react';
import classes from './Meal.module.css'

import Formclasses from './MealForm.module.css'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
function Meal(props) {
   const amountRef=useRef();
   
   const c=useContext(CartContext);
    function handleSubmit(event){
        event.preventDefault();
        if(amountRef.current.value===0){
            alert("you have the choose the amount");
            
        }
        c.addItem({
         name:props.name,
         amount:+amountRef.current.value,
         price:props.price
        })
    }
    return (
        <li key={props.key} className={classes.meal}>
           <div className={classes.name}>
            <h3>{props.name}</h3>
            <div className={classes.description}>
            {props.description}
            </div>
            <div className={classes.price}>
                {props.price}
            </div>
           </div>
           <div>
            
           <form className={Formclasses.form} onSubmit={(e)=>handleSubmit(e)} >
            <label htmlFor="">amount</label>
            <input type="number" ref={amountRef} />
            <button type="submit">add</button>
           </form>
            
            
           </div>

        </li>
    );
}

export default Meal;