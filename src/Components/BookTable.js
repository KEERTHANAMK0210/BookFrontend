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


function BookTable() {
  const [books, setBooks] = useState([]);

  const [show, setshow] = useState(false)

  const [bookid, setbookid] = useState()
  
  const [search, setsearch] = useState()     //serch

  const{_id}=useParams()

  
  const [PageNumber,setPageNumber] = useState(0)    //paggination
  const perpage=5;
  
  const pageclick=PageNumber*perpage;
  const countpage = Math.ceil(books.length / perpage);


  
  const history=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/getbookdata').then(res => {
      setBooks(res.data);
    });
  }, []);         //getting data from db

  const handledelete=(_id)=>{
    setbookid(_id)
    setshow(true)
  }


  const deleteBook=() =>{
    axios.delete(`http://localhost:4000/deletebook/${bookid}`).then(res => {
      
      setBooks(books.filter(book => book._id !== bookid));
      console.log('Book deleted successfully');
    });
    setshow(false);

  }  //delete data from db
  

  const viewbook=(_id)=>{
    history(`/viewbook/${_id}`)
    return;
  }
  const editsubmit=(_id)=>{
    history(`/updatebook/${_id}`)

  }
  const bookfilter = search ? books.filter(item => item.BookName.toLowerCase().includes(search.toLowerCase())) : books;

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
                <th>Book Name</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Year</th>
                <th>Availability</th>
                <th>Price</th>
                <th>Actions</th>
                
              </tr>
            </thead>
           
              <tbody>
    {bookfilter.slice(PageNumber * perpage, (PageNumber + 1) * perpage).map((book, index) => (

      
      <tr key={index}>
        <td>{book.BookName}</td>
        <td>{book.Author}</td>
        <td>{book.Publisher}</td>
        <td>{book.Year}</td>
        <td>{book.Availability}</td>
        <td>{book.Price}</td>
        <td>
        <ImEye size='25'  style={{margin:'11px',cursor:'pointer',color:'blue'}} onClick={()=>{viewbook(book._id)}}/>
       <RiFileEditLine size='25' style={{margin:'11px',cursor:'pointer',color:'yellow'}} onClick={()=>{editsubmit(book._id)}}/>
        <TbTrashXFilled size='25' style={{margin:'11px',cursor:'pointer',color:'red'}} onClick={()=>{handledelete(book._id)}}/>
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
    <Button variant="primary" onClick={deleteBook}> Yes
    </Button>
  
</Modal>

        </div>
        
      </div>
    </div>
  );
}
export default BookTable