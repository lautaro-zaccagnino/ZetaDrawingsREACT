import React, {useEffect, useState} from 'react';
import Item from "./Item";
import { useParams, NavLink } from "react-router-dom"


const customFetch = (data, IdCategoria) =>{
    console.log(IdCategoria);
    return new Promise((res, rej) =>
        setTimeout(() => {
            try{

                if(data){

                    if(IdCategoria){
                        const product = [data.find((Item) => Item.categoria === IdCategoria)]
                        res(product)
                    } else{
                        res(data)
                    }
                }
            } catch(err){
                rej(err)
            }

        }, 2000)
    
    )
}

const ItemList = () =>{

    let { IdCategoria } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        customFetch(Item, IdCategoria)
        .then((data)=>{
            setProducts(data);
        })
        .catch(()=>{
            console.log('Error en el cargado de productos');
        });

    }, [IdCategoria]);
    return(
        <>
            <h1>Lista de productos</h1>
        <div style={styles.divAll}>
            {products.map((productos)=>
                <> 
                    <NavLink to={productos.rutaprod} key={productos.id} style={styles.div}>
                        <h2>{productos.nombre}</h2>
                        <img src={productos.img} alt={productos.nombre} style={styles.img}></img>
                        <h3>${productos.precio}</h3>
                        <p>{productos.descripcion}</p>
                    </NavLink>
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
        textDecoration: 'none',
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