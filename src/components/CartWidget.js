import React from 'react'
import carrito from '../assets/carrito.png'

export const CartWidget = () => {
    return(

        <>
            <img src={carrito} alt="carrito" style={styles.img}></img>
        </>
    )
}


const styles={
    img:{
        width: 30,
        height: "auto",
    }
}