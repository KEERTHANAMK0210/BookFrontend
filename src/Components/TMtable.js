import axios from 'axios';
import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import { ImEye } from "react-icons/im";
import { RiFileEditLine } from "react-icons/ri";
import { TbTrashXFilled } from "react-icons/tb";

import Sidebar from './Sidebar';
import{useNavigate, useParams} from 'react-router-dom'
import Viewbook from './Viewbook';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'
import './Booktable.css'


function TMtable() {
  const [tmember, settmember] = useState([]);

  const [show, setshow] = useState(false)

  const [tmid, settmid] = useState()
  
  const [search, setsearch] = useState()     //serch

  const{_id}=useParams()

  
  const [PageNumber,setPageNumber] = useState(0)    //paggination
  const perpage=5;
  
  const pageclick=PageNumber*perpage;
  const countpage = Math.ceil(tmember.length / perpage);


  
  const history=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/getmember').then(res => {
        settmember(res.data);
    });
  }, []);         //getting data from db
console.log();
  const handledelete=(_id)=>{
    settmid(_id)
    setshow(true)
  }


  const deleteTM=() =>{
    axios.delete(`http://localhost:4000/deletemember/${tmid}`).then(res => {
      
      settmember(tmember.filter(TM => TM._id !== tmid));
      console.log('Book deleted successfully');
      
    });
    setshow(false);

  }  //delete data from db
  console.log(tmid)

  const viewTM=(_id)=>{
    history(`/viewmember/${_id}`)
    return;
  }
  const editsubmit=(_id)=>{
    history(`/editmember/${_id}`)

  }
  const bookfilter = search ? tmember.filter(item => item.BookName.toLowerCase().includes(search.toLowerCase())) : tmember;

  const changepage=({selected})=>{
    setPageNumber(selected);

   }

  

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{alignItems:"center",marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        <div className='booktable'>
          <Form.Control type="text" placeholder="Search by book name" value={search}
          onChange={(e)=>setsearch(e.target.value)}/>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date Of Birth</th>
                <th>Gender</th>
                <th>Description</th>
                <th>Role</th>
                <th>Phone Number</th>
                <th>Profile Picture</th>
                <th>Action</th>
                
              </tr>
            </thead>
           
              <tbody>
    {bookfilter.slice(PageNumber * perpage, (PageNumber + 1) * perpage).map((tmem, index) => (

      
      <tr key={index}>
        <td>{tmem.Name}</td>
        <td>{tmem.Email}</td>
        <td>{tmem.DateOfBirth}</td>
        <td>{tmem.Gender}</td>
        <td>{tmem.Description}</td>
        <td>{tmem.Role}</td>
        <td>{tmem.PhoneNumber}</td>
        <td>{tmem.ProfilePicture}</td>
        <td>
        <ImEye size='25'  style={{margin:'11px',cursor:'pointer',color:'blue'}} onClick={()=>{viewTM(tmem._id)}}/>
       <RiFileEditLine size='25' style={{margin:'11px',cursor:'pointer',color:'yellow'}} onClick={()=>{editsubmit(tmem._id)}}/>
        <TbTrashXFilled size='25' style={{margin:'11px',cursor:'pointer',color:'red'}} onClick={()=>{handledelete(tmem._id)}}/>
        </td>
      </tr>
      ))}

    </tbody>
    

            
          </Table>
           <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={countpage}
  onPageChange={changepage}
  containerClassName={"paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  activeClassName={"paginationActive"}
  disabledClassName={"paginationDisabled "}
  /> 

           
          
          <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={deleteTM}> Yes
    </Button>
  
</Modal>

        </div>
        
      </div>
    </div>
  );
}
export default TMtable