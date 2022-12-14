import React, {useEffect, useState} from 'react';
import Item from "./Item";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import {db} from "../../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemList = () =>{

    let { IdCategoria } = useParams();

    const [listProducts, setProductos] = useState([]);
    const [cargando, setCargando]  = useState([true])

    useEffect (() =>{
        const productsCollection = collection(db, "products")
        console.log(IdCategoria)

        const q = IdCategoria ? query(productsCollection, where("categoria", "==", IdCategoria)) : productsCollection       // Pregunta si IdCategoria exite definido y es igual a alguna categoria para filtrarlo, sino desplega todos los artículos

        getDocs(q)
        .then((data) =>{
            const lista = data.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProductos(lista)
        })
        .finally(()=>{
            setCargando(false)
        })

    }, [IdCategoria])
    

    return(
        <>
        <h1>Nuestros productos</h1>
        {cargando ?     
             <CircularProgress/>
        :
        (    <div style={styles.divAll}>
                {listProducts.map((prod, i) => <Item key={`${prod.productos}-${i}`} productos ={prod}/>)}

            </div>)
        }
        </>
    )
}

const styles={
    divAll:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
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