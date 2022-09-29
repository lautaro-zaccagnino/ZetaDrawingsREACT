import React from 'react'
import { NavLink } from "react-router-dom"


const FinCompra = () => {
    return(

        <NavLink to="/cart">
                <button style={styles.boton}>Finalizar compra</button>
        </NavLink>
    )
}

const styles={
    boton:{
      width: 300,
      height: 30,
      marginTop: 100,
      border: "solid 1px #7c91e8",
      borderRadius: "3px",
      backgroundColor: "#5072fa ",
      color: "white",
      fontWeight: "bold",
    }
  }
  

export default FinCompra