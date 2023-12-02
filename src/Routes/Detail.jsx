import React, {useContext} from 'react'
import MedicInfo from '../Components/MedicInfo';
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state } = useContext(ContextGlobal);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const detailh1 = {
    margin: "0px",
    padding: "30px"
  }
  return (
    <>
    <div className={state.theme}>
        <h1 style={detailh1}>Detail Dentist id </h1>
        <MedicInfo></MedicInfo>
    </div>
      
    </>
  )
}

export default Detail