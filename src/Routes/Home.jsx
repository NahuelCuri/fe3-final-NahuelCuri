import React, {useContext} from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import CardList from "../Components/CardList";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state } = useContext(ContextGlobal);
  const homeh1 =  {
    margin:"0px",
    padding: "28px"
  }
  return (
    <main className={state.theme} >
      
      {/* <div className='card-grid'>
      </div> */}
      <div className={`${state.theme} App` }>
          <h1 style={homeh1}>Home</h1>
          <CardList />
      </div>
    </main>
  );
}

export default Home