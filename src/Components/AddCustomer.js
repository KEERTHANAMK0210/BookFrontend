import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

function Addcustomer() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [AddressLine1, setAddressLine1] = useState()
    const [AddressLine2, setAddressLine2] = useState()
    const [City, setCity] = useState()
    const [State, setState] = useState()
    const [PinCode, setPinCode] = useState()
    const [Country, setCountry] = useState()

    const history=useNavigate()
    

const name=(event)=>{
    setName(event.target.value)
}

const email=(event)=>{
    setEmail(event.target.value)
}

const adl1=(event)=>{
    setAddressLine1(event.target.value)
}

const adl2=(event)=>{
    setAddressLine2(event.target.value)
}

const city=(event)=>{
    setCity(event.target.value)
}

const state=(event)=>{
    setState(event.target.value)
}

const pin=(event)=>{
    setPinCode(event.target.value)
}
const country=(event)=>{
    setCountry(event.target.value)
}

const submit=async(event)=>{
     event.preventDefault()
    const axioss=await axios.post("http://localhost:4000/customer",{Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country})
  console.log(axioss.data);
   history('/customer');

}
// history('/customer');



  return (
 
 <div style={{display:"flex"}}>
    <Sidebar/>
        <div className='bookform'style={{alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
        
         <Card style={{ width: '22rem',marginTop:"50px",textAlign:"center",height:"46rem"}}>
      
      <Card.Body>
      <form>
      <p className='heading'> Add Customer</p>

  <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" value={Name} onChange={name}/>
  </div>

  <div class="form-group">
   
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email" value={Email} onChange={email}/>
    </div>

    <div class="form-group">
   
    <input type="textarea" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Address Line 1" value={AddressLine1} onChange={adl1}/>
    </div>

    <div class="form-group">
    
    <input type="textarea" class="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Address Line 2" value={AddressLine2} onChange={adl2}/>
    </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City" value={City} onChange={city}/>
    </div>

    <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="State" value={State} onChange={state}/>
    </div>

    <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" placeholder="Pin Code" value={PinCode} onChange={pin}/>
    </div>

    <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputEmail7" aria-describedby="emailHelp" placeholder="Country" value={Country} onChange={country}/>
    </div>

        <Button variant="dark" onClick={submit}style={{marginTop:"1rem"}}>Add</Button>
        
        </form>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Addcustomer