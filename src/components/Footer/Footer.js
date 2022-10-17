import React from 'react';
import Insta from "../../assets/images/instagram-logo.png"

const Footer = () =>{
    return(
        <footer style={styles.footer}>
            <h3>@2022</h3>
            <h3>Zeta Drawings</h3>
            <a href='https://www.instagram.com/zetadrawings/' target="_blank" rel="noreferrer"><img style={styles.img} src={Insta} alt="Logo Instagram"></img></a>
        </footer>
    )
}

const styles={
    footer:{
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(108, 150, 199, 0.836)",
        padding: 20,
    },
    img:{
        width: 50,
    }
}

export default Footer