import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
 
export default function SayHello () {
  const greetings = ["Vinod","Hello", "Ciao", "Hola", "こんにちは"];
 
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    document.title = greetings[index];
  }, [index]);
  
  function updateGreeting () {
    setIndex(Math.floor(Math.random() * greetings.length));
  }
 
  return(<Container>
      <Typography variant="h4" color="green" align="center">Hello Side-Effects</Typography>
      <button onClick={updateGreeting} className="btn btn-secondary">Say Hi</button>
      </Container>)
}
