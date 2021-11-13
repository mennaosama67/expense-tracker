import React, { createContext } from "react";
import { useState,useEffect } from "react";
import { auth } from "./firebaseConfig";


export const authContext =createContext();
export const AuthProvider=(props)=>{

 const [user,setuser]=useState(null);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{
      const unsubscribe=auth.onAuthStateChanged(user=>{
          setuser(user);
          setLoading(false);
      })
    return unsubscribe;
    },[])
if(loading)<p> Loading ...</p>
    return(
        <authContext.Provider value={{user}} >
           {props.children}
        </authContext.Provider>
    )
}