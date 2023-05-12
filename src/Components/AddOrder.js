import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';

function AddOrder() {
   
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [OrderID, setOrderID] = useState()
    const [ProductNumber, setProductNumber] = useState()
    const [Date, setDate] = useState()
    
    const navi=useNavigate()

    const ordName  = (event) => {
        setFirstName(event.target.value);
      };
      const ordlname=(event)=>{
        setLastName(event.target.value)
      }
      const ordid=(event)=>{
        setOrderID(event.target.value)
      }
      const pnum=(event)=>{
        setProductNumber(event.target.value)
      }
      const date=(event)=>{
        setDate(event.target.value)
      }
      

      const click = async (event) => {
        event.preventDefault();
        const axio = await axios.post('http://localhost:4000/order',{FirstName,LastName,OrderID,ProductNumber,Date})
        .then((res) => {
            setFirstName("")
            setLastName("")
            setOrderID("")
            setProductNumber("")
            setDate("")
            
        });
        navi("/order")
      };
      
  return (
    
        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
          <Sidebar/>
      <div className="d-flex justify-content-center align-items-center">
        <Card
          style={{ width: '18rem', marginTop: '60px', textAlign: 'center' }}
          className="addbook">
          <Card.Body>
            <Form>
              <p className='heading'>ADD ORDER</p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={FirstName}
                  onChange={ordName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={LastName}
                  onChange={ordlname}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Order ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter DateOfBirth"
                  value={OrderID}
                  onChange={ordid}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Number"
                  value={ProductNumber}
                  onChange={pnum}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="date"
                  value={Date}
                  onChange={date}
                />
              </Form.Group>

              <Button className='button' variant="primary" type="submit" onClick={click}>
                ADD
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default AddOrder
