import React from "react"
import NavBar from './components/NavBar';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer';
import { CartWidget } from "./components/CartWidget"
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return(
    <>
      <NavBar>
        <CartWidget />
      </NavBar>

      <main style={styles.main}>
        <section style={styles.section}>
          <ItemListContainer style={styles.list}/>
          <ItemDetailContainer />
        </section>
      </main>
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
