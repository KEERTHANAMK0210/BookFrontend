import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './EditCust.css'


function EditCustomer() {
  const [data,setdata] = useState([])
  const {_id}=useParams() 
  
const navi=useNavigate()
console.log(_id);
useEffect(() => {
  axios.get(`http://localhost:4000/custview/${_id}`).then((customerdata)=>{
    setdata(customerdata.data)
    console.log(customerdata.data);
  })
}, [])// each data getting using 'id' 

console.log(data);
const [Name, setName] = useState(data.Name)
const [Email, setEmail] = useState(data.Email)
const [AddressLine1, setAddressLine1] = useState(data.AddressLine1)
const [AddressLine2, setAddressLine2] = useState(data.AddressLine2)
const [City, setCity] = useState(data.City)
const [State, setState] = useState(data.State)
const [PinCode, setPinCode] = useState(data.PinCode)
const [Country, setCountry] = useState(data.Country)



  const update=()=>{
    axios.put(`http://localhost:4000/editcust/${_id}`,{Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country}).then((up)=>{
 
     console.log(up.data);
     

    })
    navi('/customer')
   
   } // edit function  


  return (
    <div className='update-form'>
      <Card className='update-card' style={{width:'18rem',marginTop:"50px",textAlign:"center",height:"43rem"}}>
        <Card.Body>
          <Card.Text>
    <input  type="text" placeholder='Name'   Value={data.Name} onChange={(e)=>{setName(e.target.value)}}/>
    <input  type="text" placeholder='Email'   Value={data.Email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input  type="text" placeholder='AddressLine1'   Value={data.AddressLine1} onChange={(e)=>{setAddressLine1(e.target.value)}}/>
    <input  type="text" placeholder='AddressLine2'  Value={data.AddressLine2} onChange={(e)=>{setAddressLine2(e.target.value)}}/>
    <input  type="text" placeholder='City'   Value={data.City} onChange={(e)=>{setCity(e.target.value)}}/>
    <input  type="text" placeholder='State'   Value={data.State} onChange={(e)=>{setState(e.target.value)}}/>
    <input  type="text" placeholder='PinCode'   Value={data.PinCode} onChange={(e)=>{setPinCode(e.target.value)}}/>
    <input  type="text" placeholder='Country'  Value={data.Country} onChange={(e)=>{setCountry(e.target.value)}}/>

    <Button type='submit' className='btn-up' onClick={update}>Update</Button>
    </Card.Text>
    </Card.Body>
    </Card>
  
    </div>
 
  )
}

export default EditCustomer