import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";


export const initialState = {
theme: "light", 
data: [], 
favs: JSON.parse(localStorage.getItem('favs')) || [], 
medicInfo: {}, 
formUsername: " ", 
formEmail: " ",
error: " "
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);
 

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
