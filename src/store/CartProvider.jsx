import React ,{useState}from 'react';

function CartProvider(props) {
    
    function addItemToCart(item){
        setItems((prevItems)=>[...prevItems,item]);
    } 
    const cartContex={
        items:[],
        addItem:addItemToCart
    }

    return (
        <CartContext.Provider value={items}>
            {props.children}
        </CartContext.Provider>
            
       
    );
}

export default CartProvider;