import React, {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";
import '../Components/Theme.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state } = useContext(ContextGlobal);

  const contacth2 = {
    margin:"0px",
    paddingTop: "30px"
  }

  return (
    <div className={state.theme}>
      <h2 style={contacth2}>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact