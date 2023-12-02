import React, { useContext} from 'react';
import { ContextGlobal } from "./utils/global.context";
import classes from './Form.module.css';
import './Theme.css';



const Form = () => {
  const {state, dispatch } = useContext(ContextGlobal);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (state.formUsername.length <= 5) {
      dispatch({type: 'FORM_ERROR', payload: "Por favor verifique su información nuevamente"});
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(state.formEmail)) {
      dispatch({type: 'FORM_ERROR', payload: "Por favor verifique su información nuevamente"});
      return;
    }

    dispatch({type: 'FORM_ERROR', payload: ''});
    console.log("username: " + state.formUsername + " Email: " + state.formEmail);
    alert(`Gracias ${state.formUsername}, te contactaremos cuando antes vía mail`);

  };

  return (
    <div className={`${classes.form} ${state.theme}`} style={{height: "100vh"}}>
       
      <form onSubmit={handleSubmit} >
      
        <label>
          Nombre de usuario:
          <input type="text" value={state.formUsername} onChange={(e) => dispatch({type: 'FORM_USERNAME', payload: e.target.value})}/>
        </label>
        <label>
          Email:
          <input type="email" value={state.formEmail} onChange={(e) => dispatch({type: 'FORM_EMAIL', payload: e.target.value})}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
      {state.error && <p>{state.error}</p>} 
    </div>
  );
};

export default Form;
