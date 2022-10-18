import React, { useContext,useState } from 'react'
import { Context} from "./Context/CartContext"
import {NavLink} from "react-router-dom";
import { db } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore"

export const Cart = () => {

    const { cart, removeCart, resetCart, totalPrice } = useContext(Context)
    const [comprador, setComprador] = useState([]);

    const buyer = collection(db, "buyer")                           // Consume al comprador desde el Firebase
    getDocs(buyer)
    .then((data) =>{
        const comprad = data.docs.map((dataBuyer) => {
            return {
                ...dataBuyer.data(),
                id: dataBuyer.id
            }
        })
        setComprador(comprad)
    })

    const finalizarCompra = () =>{                                  // Envía al Firebase los datos de la compra adjunto al comprador
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            nombres: comprador,
            items: cart,
            date: serverTimestamp(), 
            total: totalPrice(),
        })
        .then(result =>{
            console.log(result.id);
            resetCart()
        })

    }

    return(
        
        <div style={styles.divMain}>
            <h2 style={{padding: 20, color: "#383f52", backgroundColor: "#eaeaea", boxShadow: "0px 0px 8px -1px rgba(0,0,0,0.35)"}}>COMPRADOR: {comprador.map(nomb => <span>{nomb.nombre} {nomb.apellido}</span>)}</h2>
            <h1 style={styles.h1}>Artículos en el carrito</h1>
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
                            <p style={{fontWeight: "bold", fontSize: 20, padding: 20}}>No hay elementos en el carrito ;(</p>
                            <NavLink to="%PUBLIC_URL%/" style={styles.buttonVolver}>Volver a la tienda</NavLink>
                        </>
                    )
                :
                <div style={styles.divCompra}>
                    <h2>Precio total: ${totalPrice()}</h2>
                    <div>
                        <button onClick={resetCart} style={styles.buttonRed}>Vaciar carrito</button>
                        <button onClick={finalizarCompra} style={styles.buttonGood}>Comprar</button>
                    </div>
                </div>
            }
        </div>
    )
}

const styles={
    divMain:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 50,
    },
    divCompra:{
        textAlign: 'center',
        backgroundColor: "#eaeaea",
        padding: 30,
        marginTop: 30,
    },
    section:{
        display: 'flex',
    },
    h1:{
        padding: "20px 0px",
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: '#5072fa',
        width: "100%",
        color: "white"
    },
    div:{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: 20,
        backgroundColor: "#eaeaea",
        padding: 20,
        boxShadow: "0px 0px 8px -1px rgba(0,0,0,0.35)",
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