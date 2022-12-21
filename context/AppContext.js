import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import { AppReducer, initialState } from "./AppReducer";
import {onlyUnique } from '../utils'

const AppContext = createContext();

export function AppWrapper({ children }) {
    
  const reducer = useReducer(AppReducer, initialState);
    
  const [ state, dispatch ] = reducer

    useEffect(() => {
        const local = localStorage.getItem("dex")
        if (local) {
            try {
                const decrypt = atob( local )
                const cpt = decrypt.split(',').filter(onlyUnique).map(o=> parseInt(o))
                dispatch({
                    type: "init_stored",
                    value: cpt, 
                  });
            } catch (err) {
                console.error('Bad Storage!')
            }
        }
      }, []);
    
      useEffect(() => {
        if (state !== initialState) {
            try {
                const s = state.cpt.join(',');
                localStorage.setItem('dex', btoa( state.cpt.join(',')  ) );
            } catch(err) {
                console.log('Error updating state')
            }
        }
      }, [state]);
    
   const contextValue = useMemo(() => {
    return {state, dispatch};
 }, [state, dispatch]);

   return (
   <AppContext.Provider value={contextValue}>
      {children}
   </AppContext.Provider>
   );
}
export function useAppContext() {
   return useContext(AppContext);
}