import {NavLink} from "react-router-dom";

const Item = ({productos}) => {
        return(
                <NavLink to={`/item/${productos.id}`} key={productos.id} style={styles.div}>
                        <h2>{productos.nombre}</h2>
                        <img src={productos.img} alt={productos.nombre} style={styles.img}></img>
                        <h3>${productos.precio}</h3>
                        <p>{productos.descripcion}</p>
                </NavLink>
        )
}

const styles ={
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

export default Item