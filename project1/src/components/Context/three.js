import Component4 from "./four";
import { Container } from '@mui/material'

function Component3(props) {
    return (
      <Container className="bg-dark text-white border">
        <h1>Component-3</h1>
        <Component4 />
      </Container>
    );
  }
  export default Component3;