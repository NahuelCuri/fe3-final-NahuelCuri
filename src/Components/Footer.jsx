import React, {useContext}  from 'react'
import { ContextGlobal } from "./utils/global.context";
import './Theme.css'
import classes from './Footer.module.css';

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <footer className={`${classes.footer} ${state.theme}`}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
