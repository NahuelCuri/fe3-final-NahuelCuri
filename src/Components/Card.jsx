import React, { useContext } from "react";
import classes from './Card.module.css';
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import './Theme.css'


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const addFav = ()=>{
    const fav = {name, username, id};

    dispatch({type: 'ADD_FAV' , payload: fav});
  }
  

  return (
    <Link to={`/dentist/${id}`}>
      <div className={`${classes.card} ${state.theme}`}>
          <img src="/images/doctor.jpg" alt="" />
          <ul>
            <li>Id: {id}</li>
            <li>Name: {name}</li>
            <li>Username: {username}</li>
          </ul>
          <button onClick={(event) => { event.preventDefault(); addFav(); }} className={`favButton ${state.theme}`}>Add fav</button>
      </div>
    </Link>
  );
};

export default Card;
