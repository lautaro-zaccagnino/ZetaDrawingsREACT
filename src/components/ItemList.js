import React, {useEffect, useState} from 'react';
import Item from "./Item";
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(Item);
    }, 2000);
});

const ItemList = () =>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        promesa
        .then((data)=>{
            setProducts(data);
            console.log(Item);
        })
        .catch(()=>{
            console.log('Error en el cargado de productos');
        });

    }, []);


    return(
        <>
            <h1>Lista de productos</h1>
        <div style={styles.divAll}>
            {products.map((product)=>
                <> 
                    <div key={product.id} style={styles.div}>
                        <h2>{product.nombre}</h2>
                        <img src={product.img} alt={product.nombre} style={styles.img}></img>
                        <h3>${product.precio}</h3>
                        <p>{product.descripcion}</p>
                    </div>
                </>
            )}

        </div>
        </>
    )
}

const styles={
    divAll:{
        display: 'flex',
    },
    div:{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: " #eaeaea ",
        width: 250,
        margin: 10,
    },
    img:{
        height: 200,
        width: "auto",
    }
}

export default ItemList;