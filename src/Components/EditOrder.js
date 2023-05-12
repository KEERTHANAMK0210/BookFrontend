import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './EditBook.css';


function EditOrder() {
  const [data,setdata] = useState([])
  const {_id}=useParams() 
  
const navi=useNavigate()
console.log(_id);
useEffect(() => {
  axios.get(`http://localhost:4000/getorder/${_id}`).then((orderdata)=>{
    setdata(orderdata.data)
    console.log(orderdata.data);
  })
}, [])// each data getting using 'id'

console.log(data);
const [FirstName, setFirstName] = useState(data.FirstName)
const [LastName, setLastName] = useState(data.LastName)
const [OrderID, setOrderID] = useState(data.OrderID)
const [ProductNumber, setProductNumber] = useState(data.ProductNumber)
const [Date, setDate] = useState(data.Date)

  const update=()=>{
    axios.put(`http://localhost:4000/editorder/${_id}`,{FirstName,LastName,OrderID,ProductNumber,Date}).then((up)=>{
 
     console.log(up.data);
     

    })
    navi("/order")
   
   } // edit function


  return (
    <div className='update-form'>
      <Card className='update-card' style={{width:'18rem',marginTop:"50px",textAlign:"center",height:"28rem"}}>
        <Card.Body>
          <Card.Text>
    <input  type="text" placeholder='firstname'   Value={data.FirstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
    <input  type="text" placeholder='lastname'   Value={data.LastName} onChange={(e)=>{setLastName(e.target.value)}}/>
    <input  type="text" placeholder='orderid'   Value={data.OrderID} onChange={(e)=>{setOrderID(e.target.value)}}/>
    <input  type="text" placeholder='productnumber'  Value={data.ProductNumber} onChange={(e)=>{setProductNumber(e.target.value)}}/>
    <input  type="date" placeholder='Date'  Value={data.Date} onChange={(e)=>{setDate(e.target.value)}}/>


    <Button type='submit' className='btn-up' onClick={update}>Update</Button>
    </Card.Text>
    </Card.Body>
    </Card>
  
    </div>
 
  )
}

export default EditOrder