import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CetegoryService";
export const AppContext=createContext(null);

export const AppContextProvider=(props)=>{
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        async function localData() {
         const response=await  fetchCategories(); 
         setCategories(response.data);
        }
        localData();
    },[]);
    const  contextValue={
           categories,
           setCategories
    }
    return <AppContext.Provider value={contextValue}>
     {props.children} 
    </AppContext.Provider>
}