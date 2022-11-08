import React from 'react'
import { VContext } from './one'
import { Container } from '@mui/material'


function Component5(props) {

    return (<Container className="bg-dark text-white border">
       <h3> Component-5</h3>
       <h4>Second Way: UseContext Hoook Using with Provider And Consumer  </h4>
        <VContext.Consumer>
          
           {value => <h3>{value}</h3>}
           

        </VContext.Consumer>

    
        </Container>)
  }

  export default Component5;
 