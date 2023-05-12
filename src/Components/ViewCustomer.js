import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function ViewCustomer() {
   
    const [view, setview] = useState([])
    const { _id }= useParams()
    const navig=useNavigate()
    
    console.log(_id);

    useEffect(() => {
        axios.get(`http://localhost:4000/custview/${_id}`).then((each)=>{
            setview(each.data)
        })
    }, [])
    
    const back=()=>{
        navig('/Client')
    }

  return (
<div className='d-flex justify-content-center align-item-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name:{view.Name}</Card.Title>
        <Card.Title>Email:{view.Email}</Card.Title>
        <Card.Title>Address Line 1:{view.AddressLine1}</Card.Title>
        <Card.Title>Address Line 2:{view.AddressLine2}</Card.Title>
        <Card.Title>City:{view.City}</Card.Title>
        <Card.Title>State:{view.State}</Card.Title>
        <Card.Title>Pin Code:{view.PinCode}</Card.Title>
        <Card.Title>Country:{view.Country}</Card.Title>

        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default ViewCustomer