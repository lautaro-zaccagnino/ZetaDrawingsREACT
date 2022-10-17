import React, { createContext, useState } from 'react'

export const Context = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addCart = (product, cantidad) =>{                         // Añade la cantidad indicada de un producto al carrito
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

    
    const removeCart= (id) =>{                                      // Remueve un elemento seleccionado del carrito  
        setCart(cart.filter( prod => prod.id !== id))
    }

    const isInCart= (id) => {                           // Funcion que resuelve si el producto ya se encontraba o no en el carrito
        return(cart.find(prod => prod.id === id));
    }

    const resetCart = () =>{                                        // Reset del Carrito
        setCart([])
    }

    const totalPrice = () => {                                      // Precio Total del carrito
        return cart.reduce((acum, prod) => acum += (prod.precio * prod.quantity),0)
    }

    const totalQuantity = () =>{                                    // Cantidad total de Items en el carrito
        return cart.reduce((acum, prod) => acum += prod.quantity,0)
    }

    return(
        <Context.Provider value={{cart, addCart, removeCart, resetCart, totalPrice, totalQuantity}}>
            {children}
        </Context.Provider>
    )
}

export default CartProvider