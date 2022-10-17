import React from 'react'
import ItemList from "./ItemList"

export const ItemListContainer = () => {
    return(
        <section style={styles.section}>
            <h1 style={styles.h1}>BIENVENIDOS A LA TIENDA DE DIBUJOS - <span style={styles.span}>Zeta Drawings</span></h1>
            <h2 style={styles.h2}>"Donde todos los dibujos demuestran el mismo flamante nivel de calidad: un asco"</h2><h3>―</h3>
            <ItemList/>
        </section>
    )
}


const styles={
    section:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "90vw",
        height: "auto",
        paddingBottom: 30,
    },
    h1:{
        fontSize: 28,
        color: "#2f53bd"
    },
    span:{
        fontSize: 32,
        fontStyle: "italic",
        color: "#74a88b",
        textDecoration: "underline",
    },
    h2:{
        fontFamily: 'Dancing Script',
        fontSize: 26,
    }
}
