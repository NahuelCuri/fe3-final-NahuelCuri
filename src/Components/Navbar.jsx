import React, { useContext } from 'react'
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import './Theme.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const changeTheme = () => {
    console.log(state.theme)
    dispatch({type: 'TOGGLE_THEME'});
  }

  return (
    <div className= {state.theme}>
      <nav className={classes.Navbar}>
        <div className={classes.NavImgLeftSide}>
          <img src="/public/images/logoOdontologia.png" alt="Logo" />
        </div>
        <div className={classes.NavList}>
          <ul>
            <Link to='/'>
              <li className={`${classes.liCursor} `}>Home</li>
            </Link>
            <li>|</li>
            <Link to='/contact'>
              <li className={classes.liCursor}>Contact</li>
            </Link>
            <li>|</li>
            <Link to='/favs'>
              <li className={classes.liCursor}>Favs</li>
            </Link>
          </ul>
          <button onClick={changeTheme}>Change theme</button>
        </div>
      </nav>
      
    </div>
    
      
   
    
  )
}

export default Navbar