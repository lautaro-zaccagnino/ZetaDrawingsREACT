import React from 'react'
import { NavLink } from "react-router-dom"


const FinCompra = () => {
    return(
        <div>
          <NavLink to="%PUBLIC_URL%/">
            <button style={styles.botonVerde}>Seguir Comprando</button>
          </NavLink>
          <NavLink to="%PUBLIC_URL%/cart">
                  <button style={styles.botonAzul}>Finalizar compra</button>
          </NavLink>
        </div>
    )
}

const styles={
    botonVerde:{
      width: 300,
      height: 30,
      marginTop: 60,
      border: "solid 1px #86cf88",
      borderRadius: "3px",
      backgroundColor: "#55ad58",
      color: "white",
      fontWeight: "bold",
    },
    botonAzul:{
      width: 300,
      height: 30,
      marginTop: 40,
      border: "solid 1px #7c91e8",
      borderRadius: "3px",
      backgroundColor: "#5072fa ",
      color: "white",
      fontWeight: "bold",
    }
  }
  

export default FinCompra