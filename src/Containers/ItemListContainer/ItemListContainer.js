import React from 'react'
import ItemList from "./ItemList"

export const ItemListContainer = () => {
    return(
        <section style={styles.section}>
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
    }
}
