import React, { useState, useContext} from 'react';
import ItemCount from '../../components/Cart/ItemCount'
import FinCompra from '../../components/Cart/FinCompra'
import { Context} from "../../components/Cart/Context/CartContext"


const ItemDetail = ({ item }) =>{

    const { addCart} = useContext(Context)
    const [carrito, setCarrito] = useState([true]);

    
    const compra = (contador) =>{                       // Señal de agregar al carrito, envía la informacion del item y la cantidad del mismo al carrito
        setCarrito(false)
        addCart(item, contador)
    }
    
    return(
        
            <>
            <div style={styles.all}> 
                <img src={item.img} alt={item.nombre} style={styles.img}></img>
                <div key={item.id} style={styles.right}>
                    <h2>{item.nombre}</h2>
                    <h3>${item.precio}</h3>
                    <p style={styles.p}>{item.descripcion}</p>
                    
                    {carrito ?
                    (<ItemCount stock={item.stock} initial={1} onAdd={compra}/>)
                    :
                    (<FinCompra/>)
                    }
                </div>
            </div>
            </>
    )
}


const styles={
    section:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    all:{
        display: 'flex',
        width: '70%',
        margin: 20,
        backgroundColor: "#eaeaea",
        padding: 20,
        boxShadow: "0px 0px 8px -1px rgba(0,0,0,0.35)",
        marginBottom: 60,
    },
    img:{
        objectFit: "cover",
        height: 400,
        width: 400,
        pointerEvents: "none",
    },
    right:{
        marginLeft: 20,
    },
    p:{
        width: 500,
    }
}



export default ItemDetail