import React, { createContext, useState } from 'react';

 const Context = createContext();

 
  export const ContextProvider=({children})=>{

    const [officer, setOfficer] = useState(false);
   return(
    <Context.Provider value={{officer,setOfficer}}>  
   
    {children}

    </Context.Provider>

)
 }
 console.log("context",Context)
 export default Context;