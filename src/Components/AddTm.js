import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';



function AddTm() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [dob, setdob] = useState()
    const [Gender, setGender] = useState()
    const [Description, setDescription] = useState()
    const [Role, setRole] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const [ProfilePicture, setProfilePicture] = useState()
    
    const navi=useNavigate()
// Name Email DateOfBirth Gender Description Role PhoneNumber ProfilePicture
    const tmName  = (event) => {
        setName(event.target.value);
      };
      const tmemail=(event)=>{
        setEmail(event.target.value)
      }
      const tmdob=(event)=>{
        setdob(event.target.value)
      }
      const tmgender=(event)=>{
        setGender(event.target.value)
      }
      const tmdescrip=(event)=>{
        setDescription(event.target.value)
      }
      const tmrole=(event)=>{
        setRole(event.target.value)
      }

      const tmphnum=(event)=>{
        setPhoneNumber(event.target.value)
      }

      const tmpfpic=(event)=>{
        setProfilePicture(event.target.value)
      }



      const click = async (event) => {
        event.preventDefault();
        const axio = await axios.post('http://localhost:4000/member',{Name,Email,dob,Gender, Description, Role,PhoneNumber,ProfilePicture
    })
        .then((res) => {
            setName("")
            setEmail("")
            setdob("")
            setGender("")
            setDescription("")
            setRole("")
            setPhoneNumber("")
            setProfilePicture("")
        });
        navi("/member")
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
              <p className='heading'>ADD TEAM MEMBERS</p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={Name}
                  onChange={tmName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  value={Email}
                  onChange={tmemail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DateOfBirth</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter DateOfBirth"
                  value={dob}
                  onChange={tmdob}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gender"
                  value={Gender}
                  onChange={tmgender}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description"
                  value={Description}
                  onChange={tmdescrip}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="role"
                  value={Role}
                  onChange={tmrole}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>phonenumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter phone number"
                  value={PhoneNumber}
                  onChange={tmphnum}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ProfilePicture</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="uplode picture"
                  value={ProfilePicture}
                  onChange={tmpfpic}
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

export default AddTm
