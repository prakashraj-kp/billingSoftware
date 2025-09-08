import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CetegoryService";
export const AppContext=createContext(null);
import { fetchItems } from "../Service/ItemService";

export const AppContextProvider=(props)=>{
    const[categories,setCategories]=useState([]);
    const[itemsData,setItemsData]=useState([]);
    const[auth,setAuth]=useState({token:null, role:null}); 


    useEffect(()=>{
        async function localData() {
          if(localStorage.getItem("token") && localStorage.getItem("role")){
            setAuth(
              localStorage.getItem("token"),
              localStorage.getItem("role")
            );
          }
         const response=await  fetchCategories(); 
         const itemResponse=await fetchItems();
         setCategories(response.data);
         setItemsData(itemResponse.data);
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
           setAuthDate,
           itemsData,
           setItemsData
    }
    return <AppContext.Provider value={contextValue}>
     {props.children} 
    </AppContext.Provider>
}