import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{

    const [contador, setContador] = useState(initial);

    const sumar = () =>{
        if(contador < stock){
            onSumar();
        }
    }

    const restar = () =>{
        if(contador > 1){
            onRemove();
        }
    }

    const reset = () =>{
        setContador(initial)
    }


    /////////////////////////////////

    const onSumar = () =>{
        setContador(contador + 1);
    }

    const onRemove = () =>{
        setContador(contador - 1);
    }

    const Carrito = () =>{
        if(stock > 0){
            onAdd(contador);
        } else alert("No hay Stock!");
    }

    ////////////////////////////////

    return(
        <> 
            <section style={styles.section}>
                <h2 style={styles.h}>Sumar al Carrito <br></br> ({stock}) en stock</h2>
                <div style={styles.div}>
                    <button onClick={restar} style={styles.masmenos}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar} style={styles.masmenos}>+</button>
                </div>
                <button onClick={Carrito} style={styles.boton}>Agregar al Carrito</button>
                <button onClick={reset} style={styles.boton}>Limpiar</button>
            </section>
        </>
    )

    
}

const styles={
    section:{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: " #f3f3f3",
        height: 220,
        borderRadius: 5,
    },
    h:{
        fontSize: 18,
        textAlign: 'center',
    },
    div:{
        display: 'flex',
        height: 40,
        alignItems: 'center',
    },
    masmenos:{
        width: 30,
        height: 30,
        margin: 40,
    },
    boton:{
        width: 150,
        height: 30,
        marginTop: 10,
        border: "solid 1px #7c91e8",
        borderRadius: "3px",
        backgroundColor: "#5072fa ",
        color: "white",
    }
}
export default ItemCount