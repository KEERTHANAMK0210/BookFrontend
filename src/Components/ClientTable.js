import axios from 'axios';
import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import { ImEye } from "react-icons/im";
import { RiFileEditLine } from "react-icons/ri";
import { TbTrashXFilled } from "react-icons/tb";

import Sidebar from './Sidebar';
import{useNavigate, useParams} from 'react-router-dom'
import Viewbook from './Viewbook';
import { Button, Modal } from 'react-bootstrap';

function ClientTable() {
  const [client, setclient] = useState([]);

  const [show, setshow] = useState(false)
  const [clientid, setclientid] = useState()

  const{_id}=useParams()
  const history=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/getclient').then(res => {
      setclient(res.data);
    });
  }, []);

  const handledelete=(_id)=>{
    setclientid(_id)
    setshow(true)
  }



  function deleteclient(_id) {
    axios.delete(`http://localhost:4000/deleteclient/${clientid}`).then(res => {
      
    setclient(client.filter(client => client._id !== clientid));
      console.log('client deleted successfully');
    });
    setshow(false)
  }
  

  const viewclient=(_id)=>{
    history(`/view/${_id}`)
    
  }
  const editsubmit=(_id)=>{
    history(`/editclient/${_id}`)

  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{alignItems:"center",marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        <div className='booktable'>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>SignedStatus</th>
                <th>Role</th>
                <th>PhoneNumber</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {client.map(client => (
               <tr>
                  <td>{client.Name}</td>
                  <td>{client.UserName}</td>
                  <td>{client.Email}</td>
                  <td>{client.SignedStatus ? "Signed" : "NotSigned"}</td>
                  <td>{client.Role}</td>
                  <td>{client.PhoneNumber}</td>
                  

                  <td>
                    <ImEye size='25'  style={{margin:'11px',cursor:'pointer',color:'blue'}} onClick={() =>{viewclient(client._id)}}/>
                    <RiFileEditLine size='25' style={{margin:'11px',cursor:'pointer',color:'yellow'}} onClick={() =>{editsubmit (client._id)}}/>
                    <TbTrashXFilled size='25' style={{margin:'11px',cursor:'pointer',color:'red'}} onClick={() => {handledelete(client._id)}}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={deleteclient}> Yes
    </Button>
  
</Modal>
        </div>
        
      </div>
    </div>
  );
}
export default ClientTable