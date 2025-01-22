import './App.css';

import Title from './components/Title';
import CalculatorRow from './components/CalculatorRow';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {

  const RowObj = (sign, val, disabled) => { return {sign: sign, val: val, disabled: disabled} }

  const [rowsList, setRowsList] = useState([RowObj("+", 0, false)])
  const [total, setTotal] = useState(0)

  const handleAddRow = () => {
    setRowsList([...rowsList, RowObj("+", 0, false)])
  }

  const handleEditRow = (row, index) => {
    let tmpRowsList = [...rowsList]
    tmpRowsList[index] = row
    setRowsList(tmpRowsList)
  }

  const handleDeleteRow = (index) => {
    let tmpRowsList = [...rowsList]
    tmpRowsList.splice(index, 1)
    setRowsList(tmpRowsList)
  }

  useEffect(() => {
    let tmpTotal = 0

    for (const row of rowsList) {
      if (!row.disabled) {
        tmpTotal += row.val * (row.sign == "+" ? 1 : -1)
      }
    }

    setTotal(tmpTotal)
  }, [rowsList])

  return (
    <>
      <Navbar fixed='top' className="bg-body-secondary" style={{fontSize: "25px"}}>
        <Container>
          <Navbar.Brand style={{fontSize: "30px"}} href="#home">Simple React calculator</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Current total: {total}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid='lg' className="">
        <Title/>
        <Row className='my-5 justify-content-center'>
          <Col md={2}>        
            <Button className='d-flex justify-content-center align-items-center' style={{fontSize: "20px"}} variant="outline-primary" onClick={handleAddRow}>
              <Icon.PlusCircleFill className='me-2'/>   Add row
            </Button>
          </Col>
          <Col md={2}>
            <Button className='d-flex justify-content-center align-items-center' style={{fontSize: "20px"}}  variant="outline-danger" onClick={() => setRowsList([])}>
              <Icon.TrashFill className='me-2'/> Delete all rows
            </Button>
          </Col>
        </Row>
        <Container className='border rounded' style={{backgroundColor: "whitesmoke"}}>
        {
          rowsList.map( (row, index) => 
            <CalculatorRow row={row} index={index} handleEditRow={handleEditRow} handleDeleteRow={handleDeleteRow}></CalculatorRow>
          )
        }
        </Container>
        <Row className='mt-5 mb-5'>
          <h1>Current total: {total}</h1>
        </Row>
      </Container>
    </>
  )

};

export default App;