import React, { useContext } from 'react'
import carrito from '../../assets/images/carrito.png'
import { Context} from "../Cart/Context/CartContext"


export const CartWidget = () => {

    const { cart, totalQuantity } = useContext(Context)


    if(cart.length !== 0){

        return(
            
            <div style={styles.carro}>
                <img src={carrito} alt="carrito" style={styles.img}></img>
                
                {totalQuantity()}
            </div>
        )
    }
}


const styles={
    img:{
        width: 30,
        height: 30,
    },
    carro:{
        display: "flex"
    }
}