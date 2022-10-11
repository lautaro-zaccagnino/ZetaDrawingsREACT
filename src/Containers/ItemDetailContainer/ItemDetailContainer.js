import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
/* import { productos } from "../../assets/productos";
import { customFetch } from "../../assets/customFetch" */
import ItemDetail from "./ItemDetail"
import CircularProgress from '@mui/material/CircularProgress';
import {db} from "../../firebase/firebase"
import {doc, getDoc, collection} from "firebase/firestore"

function ItemDetailContainer(){

    let { IdProducto } = useParams();

    const [listProducts, setProducts] = useState([]);
    const [cargando, setCargando]  = useState([true]);


    useEffect (() =>{

        const productCollection = collection(db, "products")
        const refDoc = doc(productCollection, IdProducto)
        getDoc(refDoc)
        .then((result)=>{
            setProducts({
                id:result.id,
                ...result.data()
            })
        })
        .finally(()=>{
            setCargando(false)
        })




        /* customFetch (productos)
            .then (respuesta => {
                setProducts(respuesta[parseInt(IdProducto)])
                setCargando (false)
            })

 */


    }, [IdProducto]);

    console.log (listProducts)


    return(
        <section style={styles.section}>
            <h1>Detalles</h1>

            <>
            {cargando ?     
                <CircularProgress/>
            :
                <ItemDetail item = {listProducts}/>
                
            }   
            </>

        </section>
    )


}

const styles={
    section:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    }
}

export default ItemDetailContainer