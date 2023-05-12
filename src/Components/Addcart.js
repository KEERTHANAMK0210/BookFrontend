// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Button, Card } from 'react-bootstrap';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import './Addcart.css'

// function Addcart() {
//     const [book, setbook] = useState([]);
//     const {_id}=useParams();
//     const navi=useNavigate()
//     useEffect(() => {
//         axios.get(`http://localhost:4000/getbookdata`)
//         .then((view)=>{
//           setbook(view.data)
//         })
      
//     })
//     const handleClose=()=>{
//         navi('/cart')
//     }
    
//     return (
//         <div className='cards'>
//           {book.map((boook) => (
//             <Card
//               key={boook._id}
//               className="update-card"
//               style={{
//                 backgroundColor: "darkgray",
//                 height: "24rem",
//                 textAlign: "center",
//                 width: "18rem",
//                 marginTop: "50px",
//               }}
//             >
//               <Card.Body>
//                 <Card.Text>
//                   <h2>BookName: {boook.BookName}</h2>
//                   <p>Author: {boook.Author}</p>
//                   <p>Publisher: {boook.Publisher}</p>
//                   <p>Year: {boook.Year}</p>
//                   <p>Availability: {boook.Availability}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button
//                 variant="light"
//                 className="btn-lg-btn-block mt-4"
//                 onClick={() => handleClose()}
//               ><Link to="/cart" className="text-white-50 fw-bold" style={{ textDecoration: 'none' }}>Add To Cart</Link>
                
//               </Button>
//             </Card>
//           ))}
//         </div>
//       )
//     }
    
//     export default Addcart



import React, { useEffect, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';

import './Addcart.css'

function Addcart() {
  const [book, setbook] = useState([]);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState(0);
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/getbookdata`).then((view) => {
      setbook(view.data);
    });
  }, []);

  const handleClose = () => {
    
  };
  console.log(cart);

  const handleClick = (book) => {
    if (cart.find((b) => b._id === book._id)) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    } else {
      setCart([...cart, book]);
      setSize(size + 1);
    }
  };
  
  const handleCartClick = () => {
    navigate({
      pathname: '/cart',
      state: { cart, setCart }
      
    });
  }
 

  return (
    <>
      <Nav>
        <div className='nav_box bg="primary"'>
          <span
            className='my_shop'
            onClick={() => setShow(true)}
          >
            My Shopping
          </span>
          <Link to="/cart" className='cart' onClick={handleCartClick}>
            <span>
              <FaCartPlus size={24} color="black" />
            </span>
            <span>{size}</span>
          </Link>
        </div>
      </Nav>
      <div className='card-container'>
        {book.map((boook) => (
          <Card
            key={boook._id}
            className='update-card'
            style={{ 
              backgroundColor: 'darkgray',
              height: '24rem',
              textAlign: 'center',
              width: '18rem',
              marginTop: '50px',
            }}
          >
            <Card.Body>
              <Card.Text>
                <h2>BookName: {boook.BookName}</h2>
                <p>Author: {boook.Author}</p>
                <p>Publisher: {boook.Publisher}</p>
                <p>Year: {boook.Year}</p>
                <p>Availability: {boook.Availability}</p>
              </Card.Text>
            </Card.Body>
            
            <Button
              variant='light'
              className='btn-lg-btn-block  mt-4'
              
              onClick={() => handleClick(boook)}
            >
              Add To Cart
            </Button>
            
          </Card>
          
        ))}
      </div>
      {warning && (
        <div className="warning">
          This book is already in your cart!
        </div>
      )}
      
    </>
    
  );
}

export default Addcart;
