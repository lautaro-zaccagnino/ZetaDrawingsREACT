import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer';
import { CartWidget } from "./components/CartWidget"
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart'
const App = () => {
  return(
    <>

      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
        <main style={styles.main}>
          <section style={styles.section}>
            <Routes>
                <Route path='/' element={<ItemListContainer style={styles.list}/>} />

                <Route path='/categoria/:IdCategoria' element={<ItemListContainer style={styles.list}/>} />
                <Route path='/producto/:IdProducto' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />

            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  )
}

const styles={
  main:{
    backgroundColor: "grey",
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
