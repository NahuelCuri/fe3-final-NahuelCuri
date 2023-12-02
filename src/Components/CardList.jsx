import React, {useState, useEffect} from "react";
import Card from "./Card";
import classes from './CardList.module.css';
import axios from "axios";


const CardList = () => {
    const [medicList, setMedicList] = useState([]);
    
    useEffect(() => {
        const response = axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>setMedicList(response.data));
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.list}>
                {medicList?.map((object, index) => <Card key={index} name={object.name} username={object.username} id={object.id} />)}
            </div>
        </div>
    )    
};


export default CardList;