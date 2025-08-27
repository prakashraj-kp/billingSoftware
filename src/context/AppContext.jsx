import { createContext, useEffect, useState } from "react";

export const AppContext=createContext(null);

export const AppContextProvider=(props)=>{
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        async function localData() {
         const response=await  fetchCategory(); 
         setCategories(response.data);
        }
        localData();
    },[]);
    const  contextValue={
           categories,
           setCategories
    }
    return <AppContext.Provider value={contextValue}>
    {props}
    </AppContext.Provider>
}