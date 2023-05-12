import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import "./EditClient.css";

function EditTM() {
    
  const [Data, setData] = useState([]);
  const { _id } = useParams();
  console.log(_id)
  const history = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/viewmember/${_id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(Data);
// Name Email DateOfBirth Gender Description Role PhoneNumber ProfilePicture

  const [Name, setName] = useState(Data.Name);
   const [Email, setEmail] = useState(Data.Email);
   const [Dob, setDob] = useState(Data.Dob);
   const [Description , setDescription ] = useState(Data.Description );
   const [Gender,setGender] = useState(Data.Gender)

  const [Role, setRole] = useState(Data.Role);
  const [PhoneNumber, setPhoneNumber] = useState(Data.PhoneNumber);
  const [ProfilePicture, setprofilepc] = useState(Data.ProfilePicture);


 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/editmember/${_id}`, {
        Name,
        Email,
        Dob,
        Gender,
        Description ,
        Role,
        PhoneNumber,
        ProfilePicture,
      })
      .then((res) => {
        console.log(`Client with ID ${_id} updated`);
      });
    history("/member");
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
              <Form.Control type="text" Value={Data.Name} onChange={(e) => {setName(e.target.value); }} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Email
              </Form.Label>
              <Form.Control type="email"  Value={Data.Email} onChange={(e)=>{setEmail(e.target.value); }}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Date Of Birth
              </Form.Label>
              <Form.Control type="date"  Value={Data.Dob} onChange={(e)=>{setDob(e.target.value); }}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Gender
              </Form.Label>
              <Form.Control type="text" Value={Data.Gender} onChange={(e)=>{setGender(e.target.value); }}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Description
              </Form.Label>
              <Form.Control type="text"  Value={Data.Description } onChange={(e)=>{setDescription(e.target.value); }}/>
            </Form.Group>



<Form.Group controlId="formBasicrole">
  <Form.Label style={{ color: "black" }}>Role</Form.Label>
  <Form.Control as="select" Value={Data.Role} onChange={(e) => setRole(e.target.value)}>
  <option>Select  a Role</option>
    <option Value="Super Admin">Super Admin</option>
    <option Value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>

               <Form.Group controlId="formBasicnumber">
              <Form.Label style={{ color: "black" }}>PhoneNumber</Form.Label>
              <Form.Control  type="number" Value={Data.PhoneNumber}onChange={(e)=>{setPhoneNumber(e.target.value);}}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>
                Profile Picture
              </Form.Label>
              <Form.Control type="file"  Value={Data.Profilepc } onChange={(e)=>{setprofilepc(e.target.value); }}/>
            </Form.Group>

            <Button className="btn-lg btn-block rounded-pill mt-4" variant="light" onClick={handleSubmit}> Update</Button>
          </Form> 
          {/* <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} />
<Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
<Form.Control type="date" value={Dob} onChange={(e) => setDob(e.target.value)} />
<Form.Control type="text" value={Gender} onChange={(e) => setGender(e.target.value)} />
<Form.Control type="text" value={Description} onChange={(e) => setDescription(e.target.value)} />
<Form.Control as="select" value={Role} onChange={(e) => setRole(e.target.value)}>
  <option>Select a Role</option>
  <option value="Super Admin">Super Admin</option>
  <option value="Only By Admin">Only By Admin</option>
</Form.Control>
<Form.Control type="number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
<Form.Control type="file" value={ProfilePicture} onChange={(e) => setprofilepc(e.target.value)} />
<Button className="btn-lg btn-block rounded-pill mt-4" variant="light" onClick={handleSubmit}> Update</Button>

 */}

        </Card.Body>
      </Card>
    </div>
  );
}
export default EditTM;