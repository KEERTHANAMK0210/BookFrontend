import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
//import SideNavbar from '../SideNavbar'

function ViewTM() {
   
    const [view, setview] = useState([])
    const { _id }= useParams()
    const navig=useNavigate()
    
    console.log(_id);

    useEffect(() => {
        axios.get(`http://localhost:4000/viewmember/${_id}`).then((each)=>{
            setview(each.data)
        })
    }, [])
    
    const back=()=>{
        navig('/member')
    }
// Name Email DateOfBirth Gender Description Role PhoneNumber ProfilePicture

  return (
<div className='d-flex justify-content-center align-item-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name:{view.Name}</Card.Title>
        <Card.Title>Email:{view.Email}</Card.Title>
        <Card.Title>Date Of Birth:{view.DateOfBirth}</Card.Title>
        <Card.Title>Gender:{view.Gender}</Card.Title>
        <Card.Title>Description:{view.Description}</Card.Title>

        <Card.Title>Role:{view.Role}</Card.Title>
        <Card.Title>Phone Number:{view.PhoneNumber}</Card.Title>
        <Card.Title>Profile Picture:{view.ProfilePicture}</Card.Title>
        
        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default ViewTM