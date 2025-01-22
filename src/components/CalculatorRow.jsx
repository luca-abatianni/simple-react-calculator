import '../App.css';

import { useEffect, useState } from 'react';
import { Row, Col, Form, ListGroup, Table, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function CalculatorRow(props) {
    const [sign, setSign] = useState(props.row.sign)
    const [val, setVal] = useState(props.row.val)
    const [disabled, setDisabled] = useState(props.row.disabled)

    useEffect(() => {
        const row = {sign: sign, val: val, disabled: disabled}
        props.handleEditRow(row, props.index)
    }, [sign, val, disabled])

    return (
        <>
                <Row 
                    className={'my-3 pb-3 pt-2 d-flex align-items-end justify-content-center'} 
                    style={{
                        backgroundColor: disabled ? "lightGray" : "white", 
                        border: "1px solid lightGray", 
                        borderRadius: "15px",
                        margin: "200px"
                    }}
                >
                    <Col sm={1} className='pb-2 pr-2' style={{fontSize: "25px"}}>({props.index + 1})</Col>
                    <Col md={2}>
                        <Form.Label style={{fontStyle: "italic"}}>Sign</Form.Label>
                        <Form.Select 
                            disabled={disabled}
                            onChange={event => {
                                setSign(event.target.value)
                            }}
                        >
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Label style={{fontStyle: "italic"}}>Value</Form.Label>
                        <Form.Control
                            className=''
                            disabled={disabled}
                            type="text"
                            value={val}
                            required={true}
                            onChange={event => {
                                setVal(Number(event.target.value))
                            }}
                        />
                    </Col>
                    <Col md={2}>
                        <Button variant={disabled ? 'success' : 'secondary'} onClick={() => setDisabled(!disabled)}>
                            {disabled ? "Enable" : "Disable"} {disabled ? <Icon.Check/> : <Icon.X/>}
                        </Button>
                    </Col>
                    <Col md={2}>
                        <Button variant='danger' onClick={() => props.handleDeleteRow(props.index)}>
                            Delete <Icon.Trash/>
                        </Button>
                    </Col>
                </Row>
        </>
    )
}