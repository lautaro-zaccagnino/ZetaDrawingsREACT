import Caballo from "./images/caballo.jpg"
import LivTyler from "./images/LivTyler.jpg"
import Charly from "./images/Charly.jpg"


export const productos=[
    {
        id:0,
        categoria:"actores",
        nombre: "Liv Tyler",
        img: LivTyler,
        descripcion: "Dibujo de la famosa actriz Liv Tyler, del Señor de los Anillos",
        precio: 2500,
        stock:5
    },
    {
        id:1,
        categoria:"cantantes",
        nombre: "Charly García",
        img: Charly,
        descripcion: "Dibujo del famoso cantante argentino",
        precio: 2300,
        stock:6
    },
    {
        id:2,
        categoria:"naturaleza",
        nombre: "Caballo re facha",
        img: Caballo,
        descripcion: "Un caballito re facha amigo, compralo dale",
        precio: 3000,
        stock:10
    }
]