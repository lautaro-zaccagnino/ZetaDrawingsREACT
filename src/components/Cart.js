import React, { useContext } from 'react'
import { Context} from "./Context/CartContext"
import {NavLink} from "react-router-dom";


export const Cart = () => {

    const { cart, removeCart, resetCart, totalPrice } = useContext(Context)


    return(
        <div style={styles.divMain}>
            <section style={styles.section}>
                {cart.map(prod => 
                    <div key={prod.id} style={styles.div}>
                        <img alt="imagen del artículo" src={prod.img} style={styles.img}></img>
                        <h4>Artículo: {prod.nombre}</h4>
                        <p>Cantidad: {prod.quantity}</p>
                        <button onClick={() => removeCart(prod.id)} style={styles.buttonRed}>Remover</button>
                    </div>
                )}
            </section>
            {cart.length===0  ?
                    (
                        <>
                            <p>No hay elementos en el carrito</p>
                            <NavLink to="/" style={styles.buttonVolver}>Volver a la tienda</NavLink>
                        </>
                    )
                :
                <>
                    <h2>Precio total: ${totalPrice()}</h2>
                    <div>
                        <button onClick={resetCart} style={styles.buttonRed}>Vaciar carrito</button>
                        <button style={styles.buttonGood}>Comprar</button>
                    </div>
                </>
            }
        </div>
    )
}

const styles={
    divMain:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 50,
    },
    section:{
        display: 'flex',
    },
    div:{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: 20,
        backgroundColor: "#eaeaea",
        padding: 20,
    },
    img:{
        height: 250,
        objectFit: "cover",
    },
    buttonRed:{
        width: 150,
        height: 30,
        marginTop: 10,
        border: "solid 1px #de988c",
        borderRadius: "3px",
        backgroundColor: "#b8321a",
        color: "white",
        marginRight: 30,
    },
    buttonGood:{
        width: 150,
        height: 30,
        marginTop: 10,
        border: "solid 1px #7c91e8",
        borderRadius: "3px",
        backgroundColor: "#5072fa ",
        color: "white",
    },
    buttonVolver:{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        width: 150,
        height: 30,
        marginTop: 10,
        border: "solid 1px #7c91e8",
        borderRadius: "3px",
        backgroundColor: "#5072fa ",
        color: "white",
    }
}