export const reducer = (state, action) => {
    switch (action.type){
    case 'TOGGLE_THEME':
        return {...state, theme: state.theme === "light" ? "dark" : "light"};
    case 'ADD_FAV':
        if(!state.favs.some(fav => fav.id === action.payload.id)){
            return {...state, favs: [...state.favs, action.payload]};
        }
        return state;
    case 'MEDIC_INFO':
        return {...state, medicInfo: action.payload}
    case 'FORM_USERNAME':
        return {...state, formUsername: action.payload}
    case 'FORM_EMAIL':
        return {...state, formEmail: action.payload}
    case 'FORM_ERROR':
        return {...state, error: action.payload}
      default: 
        return state;
    }
  }