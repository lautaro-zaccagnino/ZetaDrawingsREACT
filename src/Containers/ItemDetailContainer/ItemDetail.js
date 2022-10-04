import React, {useEffect, useState, useContext} from 'react';
import ItemCount from '../../components/ItemCount'
import FinCompra from '../../components/FinCompra'
import liv from "../../assets/LivTyler.jpg";
import charly from "../../assets/Charly.jpg";
import caballo from "../../assets/caballo.jpg";
import { useParams } from "react-router-dom";
import { Context} from "../../components/Context/CartContext"

const Items = [
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
                        const product = [data.find((Items) => Items.id === IdProducto)]
                        res(product)
                    } else{
                        const product = [data.find((Items) => Items.id === 0)]
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

    
    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([true]);

    useEffect(()=>{
        customFetch(Items, parseInt(IdProducto))
        .then((data)=>{
            setProducts(data);
        })
        .catch(()=>{
            console.log('Error en el cargado de productos');
        });

    }, [IdProducto]);

    const { cart, addCart} = useContext(Context)
    
    const compra = (contador) =>{
        setCarrito(false)
        addCart(products, contador)
    }
    console.dir(cart)
    
    return(
        <section style={styles.section}>
            <h1>Detalles</h1>
            {products.map((productshow)=>
                <div style={styles.all}> 
                    <img src={productshow.img} alt={productshow.nombre} style={styles.img}></img>
                    <div key={productshow.id} style={styles.right}>
                        <h2>{productshow.nombre}</h2>
                        <h3>${productshow.precio}</h3>
                        <p style={styles.p}>{productshow.descripcion}</p>
                        
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