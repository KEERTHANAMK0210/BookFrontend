// import Container from 'react-bootstrap/Container';

// import Navbar from 'react-bootstrap/Navbar';
// import {HiBookOpen } from "react-icons/hi";


// function Navi() {
//   return (
    
      
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
//     <Container>
//       <Navbar.Brand href="#home"><HiBookOpen size={40}/>   Book Store</Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
        
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
    
//   );
// }

// export default Navi;


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { HiBookOpen } from "react-icons/hi";
import './Nav.css'
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <div>
    <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
    <Navbar.Brand className='navi' href="#home"><HiBookOpen size={40}/>   Book Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <a href="userlogin" style={{ textDecoration: 'none', marginRight: '14px' }}>UserLogin</a>

        <a href="login" style={{ textDecoration: 'none' }}>Login</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='row'>
<div className='Home bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>

            <div className='col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column' style={{height:"91.5vh"}}>
            <h2 style={{fontSize:"70px"}}>BOOK STORE</h2>
            <h2 style={{fontSize:"40px"}}>FOR YOU</h2>

            <p className='mb-0' style={{color:"silver"}}>Checkout For The Books From Here.</p>

            <Link to='/Addcart' className='viewbook my-3'>View Books</Link>

            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column' style={{height:"91.5vh"}}>
           <img className='img-fluid homeimg'
           src='https://img.freepik.com/free-vector/hand-drawn-flat-design-bookstore-logo_23-2149320033.jpg?size=626&ext=jpg&ga=GA1.2.66295273.1681282468&semt=ais'/>
            </div>

        </div>
        </div>

    </div>
  );
}

export default Navi;

