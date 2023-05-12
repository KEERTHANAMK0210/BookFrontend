import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
//import SideNavbar from '../SideNavbar'

function ViewOrder() {
   
    const [view, setview] = useState([])
    const { _id }= useParams()
    const navig=useNavigate()
    
    console.log(_id);

    useEffect(() => {
        axios.get(`http://localhost:4000/vieworder/${_id}`).then((each)=>{
            setview(each.data)
        })
    }, [])
    
    const back=()=>{
        navig('/order')
    }

  return (
<div className='d-flex justify-content-center align-item-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>First Name:{view.FirstName}</Card.Title>
        <Card.Title>Last Name:{view.LastName}</Card.Title>
        <Card.Title>OrderID:{view.OrderID}</Card.Title>
         <Card.Title>Product Number:{view.ProductNumber}</Card.Title>
        <Card.Title>Date:{view.Date}</Card.Title>
        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default ViewOrder