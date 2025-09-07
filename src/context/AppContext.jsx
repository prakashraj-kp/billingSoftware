import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CetegoryService";
export const AppContext=createContext(null);

export const AppContextProvider=(props)=>{
    const[categories,setCategories]=useState([]);
    const[auth,setAuth]=useState({token:null, role:null}); 


    useEffect(()=>{
        async function localData() {
         const response=await  fetchCategories(); 
         console.log("Fetched categories:", response.data);

         setCategories(response.data);
        }
        localData();
    },[]);
   /* useEffect(() => {
  async function localData() {
    try {
      const response = await fetchCategories();
      if(response==null){
        console.log("errro")
      }
      setCategories(Array.isArray(response.data)? response.data : []);
    } catch (error) {
      setCategories([]); 
    }
  }
  localData();
}, []);*/




const setAuthDate=(token,role)=>{
  setAuth({token,role});
}
    const  contextValue={
           categories,
           setCategories,
           auth,
           setAuthDate
    }
    return <AppContext.Provider value={contextValue}>
     {props.children} 
    </AppContext.Provider>
}