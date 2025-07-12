import { useState } from "react";
import { createContext } from "react";

export let CounterContext=createContext(0)

 export default function CounterContextProvider(props) {
  let [counter,setcounter]=useState(10)

  function change() {
    setcounter(Math.random)
  }

    return<CounterContext.Provider value={{counter,setcounter,change}}>
     {props.children}
    </CounterContext.Provider>
    
}