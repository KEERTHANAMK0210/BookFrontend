import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditClient.css";

function EditClient() {
  const [clientData, setClientData] = useState([]);
  const { _id } = useParams();
  console.log(_id)
  const history = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/view/${_id}`).then((res) => {
      setClientData(res.data);
    });
  }, []);
  console.log(clientData);

  const [Name, setClientName] = useState(clientData.Name);
  const [UserName, setUserName] = useState(clientData.UserName);
  const [Email, setEmail] = useState(clientData.Email);
  const [SignedStatus, setSignedStatus] = useState(clientData.SignedStatus);
  const [Role, setRole] = useState(clientData.Role);
  const [PhoneNumber, setPhoneNumber] = useState(clientData.PhoneNumber);

 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/editclient/${_id}`, {
        Name,
        UserName,
        Email,
        SignedStatus,
        Role,
        PhoneNumber,
      })
      .then((res) => {
        console.log(`Client with ID ${_id} updated`);
      });
    history("/Client");
  }

  return (
    <div>
      <Card className="card border-secondary mx-auto mt-3 ">
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">EDIT</h1>
            <p className="" style={{ color: "black" }}>
              Please enter your updates
            </p>
          </div>
          <Form className="w-100">
            <Form.Group controlId="formBasicName">
              <Form.Label style={{ color: "black" }}>Name</Form.Label>
              <Form.Control type="text" Value={clientData.Name} onChange={(e) => { setClientName(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formBasicusername">
              <Form.Label style={{ color: "black" }}>User Name</Form.Label>
              <Form.Control type="text" name="UserName" Value={clientData.UserName} onChange={(e)=>{setUserName(e.target.value); }}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Email
              </Form.Label>
              <Form.Control type="email" name="Email" Value={clientData.Email} onChange={(e)=>{setEmail(e.target.value); }}/>
            </Form.Group>

            <Form.Group controlId="formBasicSignedstatus">
  <Form.Label style={{ color: "black" }}>Signed Status</Form.Label>
  <div>
    <Form.Check inline  label="Sign In" type="radio" name="radio" id="true" value='true' checked={SignedStatus === "true"}
      onChange={(e) => { setSignedStatus(e.target.value); }} />
    <Form.Check inline label="Not Sign In" type="radio" name="radio" id="not-sign-in" value='false' checked={SignedStatus === "false"}
      onChange={(e) => {setSignedStatus(e.target.value);  }}/>
  </div>
</Form.Group>


<Form.Group controlId="formBasicrole">
  <Form.Label style={{ color: "black" }}>Role</Form.Label>
  <Form.Control as="select" Value={clientData.Role} onChange={(e) => setRole(e.target.value)}>
  <option>Select  a Role</option>
    <option Value="Super Admin">Super Admin</option>
    <option Value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>

               <Form.Group controlId="formBasicnumber">
              <Form.Label style={{ color: "black" }}>PhoneNumber</Form.Label>
              <Form.Control  type="number" name="phonenumber" Value={clientData.PhoneNumber}onChange={(e)=>{setPhoneNumber(e.target.value);}}/>
            </Form.Group>
            <Button className="btn-lg btn-block rounded-pill mt-4" variant="light" onClick={handleSubmit}> Update</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default EditClient;