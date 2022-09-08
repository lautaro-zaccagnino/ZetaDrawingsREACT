import React from 'react'

export const ItemListContainer = () => {
    return(
        <section style={styles.section}>
            <h1 style={styles.headOne}>Hola, buen Tutor</h1>
            <h2>Todo bien?</h2>
            <p>Siéntase bienvenido a mi página para este desafío!</p>
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
    },
    headOne:{
        fontSize: 32,
    }
}
