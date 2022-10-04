import React, { createContext, useState } from 'react'

export const Context = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addCart = (product, cantidad) =>{
        if(isInCart(product.id)){
            const newCart = cart.map(prod =>{
                if(prod.id === product.id){
                    const newQuantity = prod.quantity + cantidad
                    return {...product, quantity: newQuantity}
                } else {
                    return prod
                }
            })
            setCart(newCart)
        } else{
            const newProduct = {...product, quantity: cantidad}
            setCart([...cart, newProduct])
        }
    }

    
    const removeCart= (id) =>{
        setCart(cart.filter( prod => prod.id !== id))
    }

    const isInCart= (id) => {cart.find(prod => prod.id === id);}

    const resetCart = () =>{
        setCart([])
    }
    return(
        <Context.Provider value={{cart, addCart, removeCart, resetCart}}>
            {children}
        </Context.Provider>
    )
}

export default CartProvider