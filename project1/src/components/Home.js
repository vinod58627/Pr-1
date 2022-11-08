import React ,{ useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import { Button , Row, Col, ThemeProvider} from 'react-bootstrap'


export default function Home() {
  const [show, setShow] = useState(true);
  const [ vin , setVin ]= useState(false);

  return (<div>
<h4 className="text-center">Home_Components</h4>
<style type="text/css">
    {`
    .btn-vinod {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 2rem 2rem;
      font-size: 2rem;
    }
    `}
  </style>

<Button variant="vinod" size="xxl">
    flat button
  </Button>

  <ThemeProvider prefixes={{ btn: 'my-btn' }}>
    <Button variant="primary">My Button</Button>
  </ThemeProvider>{' '}
  <Button bsPrefix="super-btn" variant="primary">
    Super button
  </Button>



    <Alert show={vin} variant="success">
      <Alert.Heading>How is Going??</Alert.Heading>
      <p> React Bootstrap Showing</p>
    
  <Button onClick={()=>setVin(false)} varient="outline-success text-danger">Close</Button>
  </Alert>
  { !vin && <Button onClick={()=> setVin(true)}> Show </Button>}

      
      <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
    
    <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}


      <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>


      
</div>)
}
