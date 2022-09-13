import React from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = () => {

    const mensajeGracias = (contador) => {
        alert("Gracias por tu compra de: " + contador + " unidades")
    }

    return(
        <section style={styles.section}>
            <ItemCount stock={5} initial={1} onAdd={mensajeGracias}/>
        </section>
    )
}


const styles={
    section:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "90vw",
        height: 400,
        backgroundColor: "lightgrey",
    }
}
