
import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css';
import { Link, useNavigate} from 'react-router-dom';

function Signup() {
  const [FirstName, setfname] = useState();
  const [LastName, setsecond] = useState();
  const [Email, setemail] = useState();
  const [Password, setPassword] = useState();
  const navi=useNavigate()

  const name = (event) => {
    setfname(event.target.value);
  };
  const second = (event) => {
    setsecond(event.target.value);
  };
  const email = (event) => {
    setemail(event.target.value);
  };
  const psw = (event) => {
    setPassword(event.target.value);
  };

  const click = async (event) => {
    event.preventDefault();
    const axio = await axios.post('http://localhost:4000/userregistration', {
      FirstName,
      LastName,
      Email,
      Password,
    });
    console.log(axio.data);
    localStorage.setItem('userinfo', JSON.stringify(axio.data));
    navi('/signup')
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card
          style={{ width: '18rem', marginTop: '60px', textAlign: 'center' }}
          className="signup-card"
        >
          <Card.Body>
            <Form>
              <p className='heading'> Signup Page</p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={FirstName}
                  onChange={name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a second name"
                  value={LastName}
                  onChange={second}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={Email}
                  onChange={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={psw}
                />
              </Form.Group>

              <Button className='button' variant="primary" type="submit" onClick={click} >
                <Link to="/login" className="text-white-50 fw-bold" style={{ textDecoration: 'none' }}>Submit</Link>
                
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
