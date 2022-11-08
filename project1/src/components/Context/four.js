import Component5 from './five'
import { useContext } from 'react'
import { VContext } from './one'
import { Container } from '@mui/material';

function Component4() {
  const value= useContext(VContext)
    return (
      <Container className="text-dark bg-light border">
        <h3>Component-4</h3>
        <p>FirstWay: Accessing The context using 1st way means Without Consumer</p>
        <h4> {value}</h4>
        <Component5 />
      </Container>
    );
  }export default Component4;