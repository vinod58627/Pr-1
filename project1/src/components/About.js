import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (<div>
    <h3 className="text-center">About-Component</h3>
    <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
    <Col>2 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
    <Col>2 of 2</Col>
  </Row>
</Container>

<Container>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={10} className="bg-dark text-white">2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

<Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>




    </div>
  )
}
