
import React from "react";
import Component2 from "./two";
import { createContext} from 'react'
import { Container } from "@mui/material";


  
export const VContext = createContext();


export default function Component1(props) {

 const value = "MY Name Is Vinod"

  return (
  <Container className="bg-dark text-white border text-center">
     <h2>UseContext Hoook Using with Provider And Consumer  </h2>
    <p>Component-4:Accessing The context using 1st way means Without Consumer</p>
    <p>Component-5:Accessing The context using 2nd Way means with Consumer</p>
 
  
  <h3> {value}</h3>
    <VContext.Provider value={value}>
    <h3> {value}</h3>
        <Component2 />
    </VContext.Provider>
    </Container>
  );
}
  