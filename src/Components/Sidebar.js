import React from 'react';

import { Nav } from 'react-bootstrap';


import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5>BOOK STORE</h5>
      <Nav.Link href='/book'>BOOK</Nav.Link>
      <Nav.Link href='/addbook'> ADD BOOK</Nav.Link>

      <Nav.Link href='/client'>CLIENT</Nav.Link>
      <Nav.Link href='/addclient'> ADD CLIENT</Nav.Link>

      <Nav.Link href='/customer'>CUSTOMER</Nav.Link>
      <Nav.Link href='/addcustomer'> ADD CUSTOMER</Nav.Link>


      <Nav.Link href='/member'>TEAM MEMBERS</Nav.Link>
      <Nav.Link href='/createmember'>CREATE TEAM MEMBERS</Nav.Link>


      <Nav.Link href='/order'>ORDER</Nav.Link>
      <Nav.Link href='/addorder'>ADD ORDER</Nav.Link>
      

      

      





    </div>
  );
};

export default Sidebar;
