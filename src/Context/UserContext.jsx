import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let UserContext=createContext()

export default function UserContextProvider(props) {
    let[login,setlogin]=useState(null)
   useEffect(()=>{
        if (localStorage.getItem('usertoken')!==null) {
            setlogin(localStorage.getItem('usertoken'))
        }
    },[])
    return<>
    <UserContext.Provider value={{login,setlogin}}>
        {props.children}
    </UserContext.Provider>
    </>
}