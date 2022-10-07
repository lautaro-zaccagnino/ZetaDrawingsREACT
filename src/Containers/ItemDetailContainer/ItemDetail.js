import React, { useState, useContext} from 'react';
import ItemCount from '../../components/ItemCount'
import FinCompra from '../../components/FinCompra'
import { Context} from "../../components/Context/CartContext"


const ItemDetail = ({ item }) =>{

    const { addCart} = useContext(Context)
    const [carrito, setCarrito] = useState([true]);

    
    const compra = (contador) =>{
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