import React, { useState, useReducer, useContext } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducers";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: ''
}

const AppContext = React.createContext();

const useAppContext = () => {
    return useContext(AppContext);
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer ,initialState);
    
    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000);
    }

return (
<AppContext.Provider value={{...state, displayAlert}}>{children}</AppContext.Provider>
)

}

export {AppProvider, AppContext, useAppContext}
