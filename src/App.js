
import Navi from './Components/Navi';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookTable from './Components/BookTable';
import AddBook from './Components/AddBook';
import Viewbook from './Components/Viewbook';
import EditBook from './Components/EditBook';
import ClientTable from './Components/ClientTable';
import AddClient from './Components/AddClient';
import ViewClient from './Components/ViewClient';
import EditClient from './Components/EditClient';
import CustomerTable from './Components/CustomerTable';
import Addcustomer from './Components/AddCustomer';
import ViewCustomer from './Components/ViewCustomer';
import EditCustomer from './Components/EditCustomer';
import TMtable from './Components/TMtable';
import AddTm from './Components/AddTm';
import ViewTM from './Components/ViewTM';
import EditTM from './Components/EditTM';
import OrderTable from './Components/OrderTable';
import AddOrder from './Components/AddOrder';
import ViewOrder from './Components/ViewOrder';
import EditOrder from './Components/EditOrder';
import UserLogin from './Components/UserLogin';
import Addcart from './Components/Addcart';
import { Card } from 'react-bootstrap';

import Cartpage from './Components/Cartpage';
import UserBooks from './Components/UserBooks';




function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      
     
    
      
             <Routes>

            
              <Route path="/" element={ <Navi/>}/>
              <Route path="/userlogin" element={ <UserLogin/>}/>
              <Route path="/userbook" element={ <UserBooks/>}/>
              


              <Route path="/Addcart" element={ <Addcart/>}/>

              <Route path="/login" element={ <Login/>}/>

              <Route path="/signup" element={<Signup />} />
              <Route path="/sidebar" element={<Sidebar/>}/>
             
            
            
             <Route path="/book" element={<BookTable />} />
             <Route path="/addbook" element={<AddBook/>}/>
             <Route path="/viewbook/:_id" element={<Viewbook/>}/>
              <Route path="/updatebook/:_id" element={<EditBook/>}/>
              
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/cartpage" element={<Cartpage/>} />

              
             
              <Route path="/client" element={<ClientTable/>}/>
              <Route path="/addclient" element={<AddClient/>}/>
              <Route path="/view/:_id" element={<ViewClient/>}/>
              <Route path="/editclient/:_id" element={<EditClient/>}/>

              
              <Route path="/customer" element={<CustomerTable/>}/>
              <Route path="/addcustomer" element={<Addcustomer/>}/>
              <Route path="/custview/:_id" element={<ViewCustomer/>}/>
              <Route path="/editcust/:_id" element={<EditCustomer/>}/>

              
              <Route path="/member" element={<TMtable/>}/>
              <Route path="/createmember" element={<AddTm/>}/>
              <Route path="/viewmember/:_id" element={<ViewTM/>}/>
              <Route path="/editmember/:_id" element={<EditTM/>}/>


              
              <Route path="/order" element={<OrderTable/>}/>
              <Route path="/addorder" element={<AddOrder/>}/>
              <Route path="/vieworder/:_id" element={<ViewOrder/>}/>
              <Route path="/editorder/:_id" element={<EditOrder/>}/>


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App; 





