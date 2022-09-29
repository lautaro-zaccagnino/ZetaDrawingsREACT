import React, {useEffect, useState} from 'react';
import ItemCount from '../../components/ItemCount'
import FinCompra from '../../components/FinCompra'
import liv from "../../assets/LivTyler.jpg";
import charly from "../../assets/Charly.jpg";
import caballo from "../../assets/caballo.jpg";
import { useParams } from "react-router-dom"


const Item = [
    {id:0, nombre: "Liv Tyler", img: liv, descripcion: "Dibujo de la actriz Liv Tyler, de la famosa saga El Señor de los Anillos, donde desempeña el papel de Arwen", precio: 2500},
    {id:1, nombre: "Charly García", img: charly, descripcion: "Dibujo del famoso cantante argentino, líder las bandas Serú Girán y Sui Géneris.", precio: 2300},
    {id:2, nombre: "Caballo re facha", img: caballo, descripcion: "Un caballito re facha amigo, compralo dale. Dale ¿Qué esperás? Compralo.", precio: 3000}
]

const customFetch = (data, IdProducto) =>{
    return new Promise((res, rej) =>
        setTimeout(() => {
            try{

                if(data){

                    if(IdProducto){
                        const product = [data.find((Item) => Item.id === IdProducto)]
                        res(product)
                        console.log(product)
                    } else{
                        const product = [data.find((Item) => Item.id === 0)]
                        res(product)
                    }
                }
            } catch(err){
                rej(err)
            }

        }, 2000)
    
    )
}


function ItemDetail(){
    let { IdProducto } = useParams();

    const compra = () =>{
        setCarrito(false)
    }
    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([true]);

    useEffect(()=>{
        customFetch(Item, parseInt(IdProducto))
        .then((data)=>{
            setProducts(data);
        })
        .catch(()=>{
            console.log('Error en el cargado de productos');
        });

    }, [IdProducto]);

    return(
        <section style={styles.section}>
            <h1>Detalles</h1>
            {products.map((product)=>
                <div style={styles.all}> 
                    <img src={product.img} alt={product.nombre} style={styles.img}></img>
                    <div key={product.id} style={styles.right}>
                        <h2>{product.nombre}</h2>
                        <h3>${product.precio}</h3>
                        <p style={styles.p}>{product.descripcion}</p>
                        
                        {carrito ?
                        (<ItemCount stock={5} initial={1} onAdd={compra}/>)
                        : (<FinCompra/>)
                            
                        }
                    </div>
                </div>
            )}
        </section>
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