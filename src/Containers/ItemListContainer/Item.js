import {NavLink} from "react-router-dom";

const Item = ({productos}) => {
        return(
                <NavLink to={`/item/${productos.id}`} key={productos.id} style={styles.div}>
                        <h2>{productos.nombre}</h2>
                        <img src={productos.img} alt={productos.nombre} style={styles.img}></img>
                        <h3>${productos.precio}</h3>
                        <p style={styles.p}>{productos.descripcion}</p>
                </NavLink>
        )
}

const styles ={
        div:{
                borderRadius: 2,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                backgroundColor: " #eaeaea ",
                width: 250,
                margin: 10,
                color: "#3c4575",
                boxShadow: "0px 0px 8px -1px rgba(0,0,0,0.35)",
            },
        p:{
                maxWidth: 230,

        },
        img:{
                height: 200,
                objectFit: "cover",
                maxWidth: 230,
        }
}

export default Item