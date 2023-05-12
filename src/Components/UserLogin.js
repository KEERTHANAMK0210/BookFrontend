// import axios from 'axios';
// import React, { useState } from 'react';
// import { Button, Card, Form } from 'react-bootstrap';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import './Login.css';

// function UserLogin() {
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLoginClick = async (event) => {
//     event.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:4000/userlogin', {
//         Email,
//         Password,
//       });
      
//       localStorage.setItem('userinfo', JSON.stringify(response.data));
//       localStorage.setItem('userid',response.data.id)

      
//       if (response.data.Token) {
//         console.log("Successfully Logged In");
//         navigate('/userbook');
//       } else {
//         console.log("Invalid email or password");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <section className="vh-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-6 col-lg-6 col-xl-5">
//               <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
//                 <div className="card-body p-1 text-center">

//                   <div className="mb-md-5 mt-md-2 pb-2">

//                     <h2 className="fw-bold mb-1 text-uppercase">Login</h2>
//                     <p className="text-white-50 mb-4">Please login using your Email and password!</p>

//                     <Form onSubmit={handleLoginClick}>
//                       <Form.Group controlId="formBasicEmail" className="form-outline form-white mb-3" >
//                         <Form.Control style={{ borderRadius: '1rem' }} type="email" placeholder="Enter Email" value={Email} onChange={handleEmailChange} />
//                         <Form.Label>Email</Form.Label>
//                       </Form.Group>

        
//                       <Form.Group controlId="formBasicPassword" className="form-outline form-white mb-3">
//                         <Form.Control style={{ borderRadius: '1rem' }} type="password" placeholder="Password" value={Password} onChange={handlePasswordChange} />
//                         <Form.Label>Password</Form.Label>
//                       </Form.Group>

//                       <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                      
//                       <Button className='button' variant="outline-light" size="xs" type="submit" >Login</Button>

//                     </Form>

                    
//                   </div>

//                   <div>
//                     <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold" style={{ textDecoration: 'none' }}>Sign Up</Link></p>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default UserLogin;

import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';

function UserLogin() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/userlogin', {
        Email,
        Password,
      });
      
      localStorage.setItem('userinfo', JSON.stringify(response.data));
      localStorage.setItem('userid',response.data.id)

      
      if (response.data.Token) {
        console.log("Successfully Logged In");
        navigate('/userbook');
      } else {
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-1 text-center">

                  <div className="mb-md-5 mt-md-2 pb-2">

                    <h2 className="fw-bold mb-1 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-4">Please login using your Email and password!</p>

                    <Form onSubmit={handleLoginClick}>
                      <Form.Group controlId="formBasicEmail" className="form-outline form-white mb-3" >
                        <Form.Control style={{ borderRadius: '1rem' }} type="email" placeholder="Enter Email" value={Email} onChange={handleEmailChange} />
                        <Form.Label>Email</Form.Label>
                      </Form.Group>

        
                      <Form.Group controlId="formBasicPassword" className="form-outline form-white mb-3">
                        <Form.Control style={{ borderRadius: '1rem' }} type="password" placeholder="Password" value={Password} onChange={handlePasswordChange} />
                        <Form.Label>Password</Form.Label>
                      </Form.Group>

                      <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                      
                      <Button className='button' variant="outline-light" size="xs" type="submit" >Login</Button>

                    </Form>

                    
                  </div>

                  <div>
                    <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold" style={{ textDecoration: 'none' }}>Sign Up</Link></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserLogin;













