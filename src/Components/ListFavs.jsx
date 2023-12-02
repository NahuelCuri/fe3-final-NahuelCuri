import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import classes from './CardList.module.css';
import { ContextGlobal } from "./utils/global.context";
import './Theme.css';

const Favs = () => {
    const { state } = useContext(ContextGlobal);
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const favsh1 = {
        margin: "0px",
        paddingTop: "30px"
    }
    return(
        <div className={state.theme}>
            <h1 style={favsh1}>Dentists Favs</h1>
            <div className = {`${classes.container} ${state.theme}`}>
                
                <div className={classes.list}>
                    {favs?.map((object, index) => <Card key={index} name={object.name} username={object.username} id={object.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Favs;