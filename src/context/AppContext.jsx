import { createContext } from "react";

export const AppContext=createContext(null);
export const AppContextProvider=(props)=>{
    const  contextValue={

    }
    return <AppContext.Provider value={contextValue}>
    {props}
    </AppContext.Provider>
}