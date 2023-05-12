import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './EditBook.css';


function EditBook() {
  const [data,setdata] = useState([])
  const {_id}=useParams() 
  
const navi=useNavigate()
console.log(_id);
useEffect(() => {
  axios.get(`http://localhost:4000/Eachbook/${_id}`).then((bookdata)=>{
    setdata(bookdata.data)
    console.log(bookdata.data);
  })
}, [])// each data getting using 'id'

console.log(data);
const [BookName, setBookName] = useState(data.BookName)
const [Author, setAuthor] = useState(data.Author)
const [Publication, setPublication] = useState(data.Publication)
const [Year, setYear] = useState(data.Year)
const [Price, setPrice] = useState(data.Price)


  const update=()=>{
    axios.put(`http://localhost:4000/edit/${_id}`,{BookName,Author,Publication,Year}).then((up)=>{
 
     console.log(up.data);
     

    })
    navi("/book")
   
   } // edit function


  return (
    <div className='update-form'>
      <Card className='update-card' style={{width:'18rem',marginTop:"50px",textAlign:"center",height:"24rem"}}>
        <Card.Body>
          <Card.Text>
    <input  type="text" placeholder='Book Name'   Value={data.BookName} onChange={(e)=>{setBookName(e.target.value)}}/>
    <input  type="text" placeholder='Author'   Value={data.Author} onChange={(e)=>{setAuthor(e.target.value)}}/>
    <input  type="text" placeholder='Publisher'   Value={data.Publisher} onChange={(e)=>{setPublication(e.target.value)}}/>
    <input  type="text" placeholder='Year'  Value={data.Year} onChange={(e)=>{setYear(e.target.value)}}/>
    <input  type="text" placeholder='price'  Value={data.Price} onChange={(e)=>{setPrice(e.target.value)}}/>
    <Button type='submit' className='btn-up' onClick={update}>Update</Button>
    </Card.Text>
    </Card.Body>
    </Card>
  
    </div>
 
  )
}

export default EditBook