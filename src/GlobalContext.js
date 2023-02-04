import { React, createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
const [questions, setQuestions] = useState('')

useEffect(()=>{
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(response => setQuestions(response))
},[])

    return (
      <GlobalContext.Provider value={questions}>
        {children}
      </GlobalContext.Provider>
    );
  };