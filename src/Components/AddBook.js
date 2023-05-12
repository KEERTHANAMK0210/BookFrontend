import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar'
import { useNavigate, useSubmit } from 'react-router-dom';

function AddBook() {
    const [BookName, setBookName] = useState()
    const [Author, setAuthor] = useState()
    const [Year, setYear] = useState()
    const [Publisher, setPublisher] = useState()
    const [Availability, setAvailability] = useState()
    const [Image, setImage] = useState()
    const [Price, setPrice] = useState()
    const navi=useNavigate()
    const bname = (event) => {
      setBookName(event.target.value);
      };
      const author=(event)=>{
        setAuthor(event.target.value)
      }
      const publisher=(event)=>{
        setPublisher(event.target.value)
      }
      const year=(event)=>{
        setYear(event.target.value)
      }
      const availability=(event)=>{
        setAvailability(event.target.value)
      }
      const image=(event)=>{
        setImage(event.target.value)
      }
      const price=(event)=>{
        setPrice(event.target.value)
      }
      const click = async (event) => {
        event.preventDefault();
        const axio = await axios.post('http://localhost:4000/book', { BookName, Author, Publisher, Year, Availability,Image,Price })
        .then((res) => {
          setBookName("")
          setAuthor("")
          setPublisher("")
          setYear("")
          setAvailability("")
          setImage("")
          setPrice("")
        });
        navi("/book")
      };
      
  return (
    
        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
          <Sidebar/>
      <div className="d-flex justify-content-center align-items-center">
        <Card
          style={{ width: '20rem', marginTop: '60px', textAlign: 'center' }}
          className="addbook">
          <Card.Body>
            <Form>
              <p className='heading'> Add Books</p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book name"
                  value={BookName}
                  onChange={bname}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter  author name"
                  value={Author}
                  onChange={author}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter publisher"
                  value={Publisher}
                  onChange={publisher}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="year"
                  value={Year}
                  onChange={year}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Availability"
                  value={Availability}
                  onChange={availability}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enetr the url"
                  value={Image}
                  onChange={image}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="price"
                  value={Price}
                  onChange={price}
                />
              </Form.Group>

              <Button className='button' variant="primary" type="submit" onClick={click}>
                ADD
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default AddBook
