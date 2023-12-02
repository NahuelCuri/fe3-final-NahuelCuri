import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import classes from './MedicInfo.module.css'

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContextGlobal } from "./utils/global.context";
import './Theme.css';


const MedicInfo = () => {
    const {id} = useParams();
    const { state, dispatch } = useContext(ContextGlobal);

    useEffect(() => {
        const response = axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response=>dispatch({type: 'MEDIC_INFO', payload: response.data })); 
    }, []); 

    return(
        <div className={state.theme}>
            <div className= {`${classes.container} ${state.theme}`}>
                <img src="../../public/images/doctor.jpg" alt="" />
                <div className={`${classes.item} `}>
                    <p>Name: {state.medicInfo.name}</p>
                    <p>Email: {state.medicInfo.email}</p>
                    <p>Phone: {state.medicInfo.phone}</p>
                    <p>Web: {state.medicInfo.website}</p>
                </div>
            </div>   
        </div>   
    );
};


export default MedicInfo;