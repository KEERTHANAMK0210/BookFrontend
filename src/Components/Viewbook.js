import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Viewbook() {
    const [book, setBook] = useState([]);
    const{_id}=useParams();
    useEffect(() => {
      axios.get(`http://localhost:4000/Eachbook/${_id}`)
      .then((view)=>{
        setBook(view.data)
        console.log(view.data)
      })
      
    }, [_id])
    
    
  return (
    
    
    <div className='center'>
      <Card className='update-card' style={{width:'18rem',marginTop:"50px",textAlign:"center",height:"24rem"}}>
        <Card.Body>
          <Card.Text>

      <h1>{book.BookName}</h1>
      <p>{book.Author}</p>
      <p>{book.Publisher}</p>
      <p>{book.Year}</p>
      </Card.Text>

      </Card.Body>
      </Card>
      </div>
    
  )
}

export default Viewbook
