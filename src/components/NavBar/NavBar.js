import React from 'react'
import logo from '../../assets/images/ZD.jpg'
import { NavLink } from "react-router-dom"

const categorias = [
    {id:0, nombre:"Actores", ruta:"/categoria/actores"},
    {id:1, nombre:"Cantantes", ruta:"/categoria/cantantes"},
    {id:2, nombre:"Naturaleza", ruta:"/categoria/naturaleza"},
]

const NavBar = ({children}) => {
    return (
        <header style={styles.container}>
        <div style={styles.NavImg}>
        <NavLink to={"%PUBLIC_URL%/"}><img src={logo} alt="logo" style={styles.imagen}/></NavLink>
            <h1>Zeta Drawings</h1>
        </div>
        <nav>
            <h2>Categorías</h2>
            <div style={styles.cate}>
                {categorias.map((categoria) => 
                {return (<NavLink key={categoria.id} style={styles.anchors} to={categoria.ruta}>{categoria.nombre} </NavLink>)}
                )}
                <NavLink style={styles.anchors} to="%PUBLIC_URL%/cart">{children}</NavLink>
            </div>
        </nav>
 
        </header>
    )
}

const styles= {
    container:{
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(108, 150, 199, 0.836)",
        padding: 20,
    },

    NavImg:{
        display: 'flex',
        alignItems: "center",
    },

    imagen:{
        width: 100,
        marginRight: 10,
    },

    anchors:{
        paddingRight: 20,
        textDecoration: "none",
        color: "black",
        fontWeight: 600,
    },
    cate:{
        display: 'flex',
    }
}



export default NavBar