import React from "react"
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { CartWidget } from "./components/CartWidget"

const App = () => {
  return(
    <>
      <NavBar>
        <CartWidget />
      </NavBar>

      <main style={styles.main}>
        <ItemListContainer />
      </main>
    </>
  )
}

const styles={
  main:{
    backgroundColor: "grey",
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
  }
}

export default App
