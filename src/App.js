import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer';
import { CartWidget } from "./components/NavBar/CartWidget"
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart'
import CartProvider from "./components/Cart/Context/CartContext";
import Footer from "./components/Footer/Footer"
import Fondo from "./assets/images/fondo.jpg"

const App = () => {
  return(
    <>

      <BrowserRouter>
      <CartProvider>

        <NavBar>
          <CartWidget />
        </NavBar>
        <main style={styles.main}>
          <section style={styles.section}>
            <Routes>
                <Route path='/' element={<ItemListContainer style={styles.list}/>} />

                <Route path='/categoria/:IdCategoria' element={<ItemListContainer style={styles.list}/>} />
                <Route path='/item/:IdProducto' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />

            </Routes>
          </section>
        </main>
      </CartProvider>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

const styles={
  main:{
    backgroundImage: `url(${Fondo})`,
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },
  section:{
    backgroundColor: "lightgrey",
    width: "90%",
  },
  list:{
    backgroundColor: "grey",
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
  }
}



export default App
