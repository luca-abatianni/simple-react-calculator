import { Row, Col, Card, ListGroup, Table, Button, Container } from 'react-bootstrap';
import '../App.css';

export default function Title(props) {
  return (
    <>
      <Row className='d-flex align-items-center justify-content-center my-5'>
        <Col className='text-center'>
          <p className='text-center mt-5' style={{fontSize: "50px"}}>Simple React Calculator</p>
          <h5>by Luca Abatianni</h5>
        </Col>
      </Row>
    </>
  )
}