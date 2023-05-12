import axios from 'axios';
import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import { ImEye } from "react-icons/im";
import { RiFileEditLine } from "react-icons/ri";
import { TbTrashXFilled } from "react-icons/tb";

import Sidebar from './Sidebar';
import{useNavigate, useParams} from 'react-router-dom'

import { Button, Modal } from 'react-bootstrap';

function OrderTable() {
  const [order, setorder] = useState([]);

  const [show, setshow] = useState(false)
  const [orderid, setorderid] = useState()

  const{_id}=useParams()
  const history=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/getorder').then(res => {
      setorder(res.data);
    });
  }, []);

  const handledelete=(_id)=>{
    setorderid(_id)
    setshow(true)
  }



  function deleteorder(_id) {
    axios.delete(`http://localhost:4000/deleteorder/${orderid}`).then(res => {
      
    setorder(order.filter(order => order._id !== orderid));
      console.log('client deleted successfully');
    });
    setshow(false)
  }
  

  const vieworder=(_id)=>{
    history(`/vieworder/${_id}`)
    
  }
  const editsubmit=(_id)=>{
    history(`/editorder/${_id}`)

  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{alignItems:"center",marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        <div className='booktable'>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>OrderID</th>
                <th>ProductNumber</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order.map(order => (
               <tr>
                  <td>{order.FirstName}</td>
                  <td>{order.LastName}</td>
                  <td>{order.OrderID}</td>
                  <td>{order.ProductNumber}</td>
                  <td>{order.Date}</td>
                  

                  <td>
                    <ImEye size='25'  style={{margin:'11px',cursor:'pointer',color:'blue'}} onClick={() =>{vieworder(order._id)}}/>
                    <RiFileEditLine size='25' style={{margin:'11px',cursor:'pointer',color:'yellow'}} onClick={() =>{editsubmit (order._id)}}/>
                    <TbTrashXFilled size='25' style={{margin:'11px',cursor:'pointer',color:'red'}} onClick={() => {handledelete(order._id)}}/>
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
    <Button variant="primary" onClick={deleteorder}> Yes
    </Button>
  
</Modal>
        </div>
        
      </div>
    </div>
  );
}
export default OrderTable