// import React, { useEffect, useState } from 'react'
// import { useCart } from '../context/CartProvuder'
// import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap'
// import { Link, useParams } from 'react-router-dom'
// import { GiSecretBook } from 'react-icons/gi'
// import './Userbook.css'
// import axios from 'axios'

// const UserBooks = () => {
//     const [bookinfo, setbookinfo] = useState([])

//     const [cart, setcart] = useCart()
//     // const [show, setshow] = useState(false)
//     // const [cart, setcart] = useState([])
    
//     const {_id}=useParams()
//   //  const navig=useNavigate()


//     useEffect(() => {
//       axios.get('http://localhost:4000/getbookdata').then((res)=>{
//         setbookinfo(res.data)
//       })
//     }, [])
//     // console.log(bookinfo);

//     // const addcart=(_id)=>{
//     //   const cart=bookinfo.filter(product=>{
//     //     return product._id === _id
//     //   })
     
//     //   console.log(cart);
//     //   if(cart._id === _id){
//     //     alert('Already Exist')
//     //   }else{
//     //     setsize(size + 1)
//     //   }
//     // }

//     // const addcart=(bookinfo)=>{
//       // if(cart.find((book)=>book._id === bookinfo._id)){
//       //   alert('Already in cart')
//       // }else{
//     //     setcart([...cart,bookinfo]);
       
//     //     setsize(size + 1);
        
//     //   }

//     // }
//     // console.log(size);

// const logout=()=>{
//   // const db=await axios.post('http://localhost:5000/userlogin',{Email,Password})
//   localStorage.clear('userinfo')
 

// }
//   return (
//     <div style={{backgroundColor:'black'}}>
//    <div>
//    <Navbar className='main-navbar' bg="dark" expand="lg" style={{borderBottom:"1px solid white"}}>
//     <Container fluid>
//       <Navbar.Brand className='navbar-brand text-white' href="#"> <GiSecretBook /> Books</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Nav className="navbar navbar-expand-lg  bg-dark text-white  ">
//       <Link  to="/userbooks" className="nav-item nav-link active text-white">Home</Link>
//       <Link  to="/cart" className="nav-item nav-link active text-white"> Cart {cart.length} </Link>
//       <Link  to="/userlogin" className="nav-item nav-link active text-white" onClick={logout}> Log Out </Link>
//       </Nav>
//     </Container>
//   </Navbar>
//    </div>
//     <div className='card-container'>
//     {bookinfo.map((data)=>(
//     <Card key={data._id} className='user-card' >
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body className='d-block'>
//         <Card.Title>Book Name:-{data.BookName}</Card.Title>
//         <Card.Text>
//           Author:-{data.Author}<br/>
//           Publication:-{data.Publication}<br/>
//           Year:-{data.Year}<br/>
//         </Card.Text>
        
//         <Button className='user-card-button' onClick={()=>{  
//           if(cart.find((book)=>book._id === data._id)){
//           alert('Already in cart')
//         }else{
//           setcart([...cart,data])
//           alert('Item added')
//           localStorage.setItem('cart',JSON.stringify([...cart,data]))
//         }
//       }}>Add to cart</Button>
//       </Card.Body>
//     </Card>
//     ))}

   
//     </div>
//     </div>
//   )
// }

// export default UserBooks

//==================================================================================

// import React, { useEffect, useState } from 'react'
// import { useCart } from '../context/CartProvuder'
// import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap'
// import { Link, useParams } from 'react-router-dom'
// import { GiSecretBook } from 'react-icons/gi'
// import { FaCartPlus } from 'react-icons/fa';
// import './Userbook.css'
// import axios from 'axios'

// const UserBooks = () => {
//     const [bookinfo, setbookinfo] = useState([])
//     const [cart, setcart] = useCart()
//     const {_id}=useParams()
      
//     useEffect(() => {
//       axios.get('http://localhost:4000/getbookdata').then((res)=>{
//         setbookinfo(res.data)
//       })
//     }, [])
    
//         const logout=()=>{
  
//   localStorage.clear('userinfo')
 

// }
//   return (
//     <div style={{backgroundColor:'black',minHeight:'100vh'}}>
//    <div>
//    <Navbar className='main-navbar' bg="dark" expand="lg" style={{borderBottom:"px solid white"}}>
//     <Container fluid>
//       <Navbar.Brand className='navbar-brand text-white' href="#"> <GiSecretBook /> Books</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Nav className="navbar navbar-expand-lg  bg-dark text-white  ">
//       <Link  to="/userbooks" className="nav-item nav-link active text-white">Home</Link>
//       <Link  to="/cart" className="nav-item nav-link active text-white">
//         <span>
//               <FaCartPlus size={24} color="white" />
//             </span>
//              {cart.length} </Link>
//       <Link  to="/userlogin" className="nav-item nav-link active text-white" onClick={logout}> Log Out </Link>
//       </Nav>
//     </Container>
//   </Navbar>
//    </div>
//     <div className='card-container py-4'>
//     {bookinfo.map((data)=>(
//     <Card key={data._id} className='user-card' >
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body className='d-block'>
//         <Card.Title>Book Name:-{data.BookName}</Card.Title>
//         <Card.Text>
//           Author:-{data.Author}<br/>
//           Publication:-{data.Publication}<br/>
//           Year:-{data.Year}<br/>
//         </Card.Text>
        
//         <Button className='user-card-button' onClick={()=>{  
//           if(cart.find((book)=>book._id === data._id)){
//           alert('Already in cart')
//         }else{
//           setcart([...cart,data])
//           alert('Item added')
//           localStorage.setItem('cart',JSON.stringify([...cart,data]))
//         }
//       }}>Add to cart</Button>
//       </Card.Body>
//     </Card>
//     ))}

   
//     </div>
//     </div>
//   )
// }

// export default UserBooks

//=====================================================================================

// import React, { useEffect, useState } from 'react'
// import { useCart } from '../context/CartProvuder'
// import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap'
// import { Link, useParams } from 'react-router-dom'
// import { GiSecretBook } from 'react-icons/gi'
// import { FaCartPlus } from 'react-icons/fa';
// import './Userbook.css'
// import axios from 'axios'

// const UserBooks = () => {
//   const [bookinfo, setbookinfo] = useState([])
//   const [cart, setCart] = useCart()
//   const [showWarning, setShowWarning] = useState(false)
//   const [showMessage, setShowMessage] = useState(false)
//   const {_id}=useParams()

//   useEffect(() => {
//     axios.get('http://localhost:4000/getbookdata').then((res)=>{
//       setbookinfo(res.data)
//     })
//   }, [])

//   const logout = () => {
//     localStorage.clear('userinfo')
//   }

  

  // const handleAddToCart = (book) => {
  //   if (cart.find((b) => b._id === book._id)) {
  //     setShowWarning(true);
  //     setTimeout(() => {
  //       setShowWarning(false);
  //     }, 2000);
  //   } else {
  //     setCart([...cart, book])
  //     localStorage.setItem('cart', JSON.stringify([...cart, book]))
  //     setShowMessage(true);
  //     setTimeout(() => {
  //       setShowMessage(false);
  //     }, 2000);
  //   }
  // }

//   return (
//     <div style={{backgroundColor:'black',minHeight:'100vh'}}>
//       <div>
//         <Navbar className='main-navbar' bg="dark" expand="lg" style={{borderBottom:"px solid white"}}>
//           <Container fluid>
//             <Navbar.Brand className='navbar-brand text-white' href="#"> <GiSecretBook /> Books</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Nav className="navbar navbar-expand-lg  bg-dark text-white  ">
//               <Link  to="/userbooks" className="nav-item nav-link active text-white">Home</Link>
//               <Link  to="/cartpage" className="icon nav-link active text-white">
//                 <span>
//                   <FaCartPlus size={24} color="white" />
//                 </span>
//                 <span>{cart.length}</span>
//               </Link>
//               <Link  to="/userlogin" className="nav-item nav-link active text-white" onClick={logout}> Log Out </Link>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//       <div className='card-container py-4 '>
//         {bookinfo.map((data)=>(
          
          
//           <Card key={data._id} className='user-card' style={{
//             width:"300px",
//           height:"500px",
//           border:"1px solid white",
//           borderRadius:"20px",
//           borderTopLeftRadius:"20px",
//               borderTopRightRadius:"20px"}} >
            
//             <Card.Body className='d-block'>
//             <div>
//           <img style={{width:"200px",
//           height:"210px",
//           borderTopLeftRadius:"10px",
//           borderTopRightRadius:"10px",

//         }} 
//           className='img-fluid'
//            src={data.Image} alt="/"/>
//            </div>
//               <Card.Title>Book Name:-{data.BookName.slice(0,20)}...</Card.Title>
//               <Card.Text>
             
//                 Author:-{data.Author}<br/>
//                 Publication:-{data.Publisher}<br/>
//                 Year:-{data.Year}<br/>
//                 Rs-{data.Price}<br/>
//               </Card.Text>
//               <Button className='user-card-button' onClick={() => handleAddToCart(data)}>Add to cart</Button>
              
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
      // {showWarning && <div className="warning">Item already in cart!</div>}
      // {showMessage && <div className="message">Book added</div>}
//     </div>
//   )
// }

// export default UserBooks




//====================================================================================


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './Userbook.css'
// import { Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'

// import { Link, useNavigate, useParams } from 'react-router-dom'

// import { GiSecretBook } from 'react-icons/gi'

// function UserBooks() {
//     const [bookinfo, setbookinfo] = useState([])
//      const [productid, setproductid] = useState('')
//      const [showWarning, setShowWarning] = useState(false)
//      const [showMessage, setShowMessage] = useState(false)

    
    
//     const {_id}=useParams()
 


//     useEffect(() => {
//       axios.get('http://localhost:4000/getbookdata').then((res)=>{
//         setbookinfo(res.data)
//       })
//     }, [])


    

//     const handlecart=(productid)=>{
//       const prdctid=productid
//       const userid=localStorage.getItem('userid')
      
//       const book = bookinfo.find((b) => b._id === prdctid);
//       const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
//       if (cartItems.find((b) => b._id === prdctid)) {
//         setShowWarning(true);
//         setTimeout(() => {
//           setShowWarning(false);
//         }, 2000);
//         return;
//       }
    
//       const data={productid:prdctid,userid:userid}
      
//       axios.post('http://localhost:4000/addtocart',data).then((res)=>
//         console.log(res.data))
    
//       setCart([...cartItems, book])
//       localStorage.setItem('cart', JSON.stringify([...cartItems, book]))
//       setShowMessage(true);
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 2000);
//     }
    
    
    
// const logout=()=>{
//   localStorage.removeItem('userinfo')
// }


//   return (
       
//    <div style={{backgroundColor:'black'}}>
//    <div>
//    <Navbar className='main-navbar' bg="dark" expand="lg">
//     <Container fluid>
//       <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook/> Books</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Nav>
//       <Link  to="/userbooks" className='navbar-link'>Home</Link>
//       <Link  to="/cartpage" className='navbar-link'> Cart  </Link>
//       <Link  to="/userlogin" className='navbar-link' onClick={logout}> Log Out </Link>
//       </Nav>
//     </Container>
//   </Navbar>
//    </div>
//     <div className='user-main-div'>
//     {bookinfo.map((data)=>(
//     <Card key={data._id} className='user-card' >
//       {/* <Card.Img variant="top" src="data.Image" /> */}
//       <Card.Body className='d-block'>
//       <div>
//           <img style={{width:"200px",
//           height:"210px",
//           borderTopLeftRadius:"10px",
//           borderTopRightRadius:"10px",

//         }} 
//           className='img-fluid'
//            src={data.Image} alt="/"/>
//            </div>
      
//         <Card.Title>Book Name:-{data.BookName}</Card.Title>
//         <Card.Text>
//           Author:-{data.Author}<br/>
//           Publication:-{data.Publisher}<br/>
//           Year:-{data.Year}<br/>
//           Rs:-{data.Price}<br/>
//         </Card.Text>
        
//         <Button className='user-card-button' onClick={()=>handlecart(data._id)}>Add to cart</Button>
//       </Card.Body>
//     </Card>
//     ))}
//     </div>
//     </div>


//   )
// }

// export default UserBooks



//========================================================================


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './Userbook.css'
// import { Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'

// import { Link, useNavigate, useParams } from 'react-router-dom'

// import { FaCartPlus } from 'react-icons/fa';

// function UserBooks() {
//     const [bookinfo, setbookinfo] = useState([])
//     const [showWarning, setShowWarning] = useState(false)
//     const [showMessage, setShowMessage] = useState(false)
//     const [cartItems, setCartItems] = useState([])

//     const {_id} = useParams()

//     useEffect(() => {
//         axios.get('http://localhost:4000/getbookdata').then((res) => {
//             setbookinfo(res.data)
//         })
//     }, [])

//     const handlecart = (productid) => {
//         const prdctid = productid
//         const userid = localStorage.getItem('userid')
      
//         const book = bookinfo.find((b) => b._id === prdctid);
//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
//         if (cartItems.find((b) => b._id === prdctid)) {
//           setShowWarning(true);
//           setTimeout(() => {
//             setShowWarning(false);
//           }, 2000);
//           return;
//         }
      
//         axios.post('http://localhost:4000/addtocart', { productid: prdctid, userid: userid }).then((res) => {
//           console.log(res.data)
//           const newCartItems = [...cartItems, book];
//           setCartItems(newCartItems);
//           localStorage.setItem('cart', JSON.stringify(newCartItems));
//           setShowMessage(true);
//           setTimeout(() => {
//             setShowMessage(false);
//           }, 2000);
//         })
//       }
      
      
//     const logout = () => {
//         localStorage.removeItem('userinfo')
//     }

//     return (
//         <div style={{backgroundColor:'black'}}>
//             <div>
//                 <Navbar className='main-navbar' bg="dark" expand="lg">
//                     <Container fluid>
//                         <Navbar.Brand className='navbar-brand' href="#"> 
                        
//                 </Navbar.Brand>
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Nav>
//                             <Link  to="/userbooks" className='navbar-link'>Home</Link>
//                             <Link  to="/cartpage" className="icon nav-link active text-white">
//                             <span><FaCartPlus size={24} color="white" /></span>
//                             <span>{cartItems.length}</span>
//                             </Link>
//                             <Link  to="/userlogin" className='navbar-link' onClick={logout}> Log Out </Link>
//                         </Nav>
//                     </Container>
//                 </Navbar>
//             </div>
            
//             <div className='card-container'>
//                 {bookinfo.map((data) => (
//                     <Card key={data._id} className='user-card' 
//                     style={{
//                       width:"300px",
//                     height:"500px",
//                     border:"1px solid white",
//                     borderRadius:"20px",
//                     borderTopLeftRadius:"20px",
//                         borderTopRightRadius:"20px",
//                    }}> 
//                         <div>
//                             <img style={{
                               
//                                 width:"200px",
//                                 height:"210px",
//                                 borderTopLeftRadius:"10px",
//                                 borderTopRightRadius:"10px",
//                             }} 
//                             className='img-fluid'
//                             src={data.Image} alt="/"/>
//                         </div>

//                         <Card.Body className='d-block'>
//                             <Card.Title>Book Name:-{data.BookName.slice(0,20)}...</Card.Title>
//                             <Card.Text>
//                                 Author:-{data.Author}<br/>
//                                 Publication:-{data.Publisher}<br/>
//                                 Year:-{data.Year}<br/>
//                                 Rs:-{data.Price}<br/>
//                             </Card.Text>
//                             <Button className='user-card-button' onClick={() => handlecart(data._id)}>Add to cart</Button>
//                         </Card.Body>
//                     </Card>
//                 ))}
//             </div>
            
            
//             {showWarning && <div className="warning">Item already in cart!</div>}
//             {showMessage && <div className="message">Book added</div>}
//         </div>
        
//     )
// }

// export default UserBooks


//=========================================================================================


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Badge, Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { GiSecretBook } from 'react-icons/gi'

// function UserSideBooks() {
//     const [bookinfo, setbookinfo] = useState([])
//     const [productid, setproductid] = useState('')
//     const [cartCount, setCartCount] = useState(0)


    
    
//     const {_id}=useParams()
  


//     useEffect(() => {
//       axios.get('http://localhost:4000/getbookdata').then((res)=>{
//         setbookinfo(res.data)
//       })
//     }, [])


//     const handlecart=(productid)=>{
//       const prdctid=productid
//       const userid=localStorage.getItem('userid')
      

//       const data={productid:prdctid,userid:userid}
//       console.log(data.productid);
      
//       axios.post('http://localhost:4000/addtocart',data).then((res)=>
//       console.log(res.data))
//       setCartCount(cartCount + 1)
    
//     }
    
    
// const logout=()=>{
//   localStorage.removeItem('userinfo')
// }
//   return (
       
//    <div style={{backgroundColor:'black'}}>
//    <div>
//    <Navbar className='main-navbar' bg="light" expand="lg">
//     <Container fluid>
//       <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Nav>
//       <Link className="nav-item nav-link active text-black" to="/userbooks"> Home</Link>
//       <Link className="nav-item nav-link active text-black" to="/cartpage">
//        <FontAwesomeIcon icon={faCartPlus} /><Badge variant="light">{cartCount}</Badge></Link>
//       <Link className="nav-item nav-link active text-black" to="/userlogin" onClick={logout}>Log Out</Link>
      
//       </Nav>
//     </Container>
//   </Navbar>
//    </div>
//     <div className='card-container'>
//     {bookinfo.map((data)=>(
//     <Card key={data._id} className='user-card' >
//       <div><img style={{ width:"300px",
//                         height:"210px",
//                         borderTopLeftRadius:"10px",
//                         borderTopRightRadius:"10px", }} 
//                              className='img-fluid'
//                             src={data.Image} alt="/"/></div>
//       <Card.Body className='d-block'>
//         <Card.Title>{data.BookName}</Card.Title>
//         <Card.Text>
//           Author:-{data.Author}<br/>
//           Publication:-{data.Publication}<br/>

//           Year:-{data.Year}<br/>
//           Rs:-{data.Price}
//         </Card.Text>
        
//         <Button className='user-card-button' onClick={()=>handlecart(data._id)}>Add to cart</Button>
//       </Card.Body>
//     </Card>
//     ))}
//     </div>
//     </div>


//   )
// }

// export default UserSideBooks




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiSecretBook } from 'react-icons/gi'

function UserSideBooks() {
    const [bookinfo, setbookinfo] = useState([])
    const [productid, setproductid] = useState('')
    const [cartCount, setCartCount] = useState(0)


    
    
    const {_id}=useParams()
  


    useEffect(() => {
      axios.get('http://localhost:4000/getbookdata').then((res)=>{
        setbookinfo(res.data)
      })
    }, [])


    const handlecart=(productid)=>{
      const prdctid=productid
      const userid=localStorage.getItem('userid')
      

      const data={productid:prdctid,userid:userid}
      console.log(data.productid);
      
      axios.post('http://localhost:4000/addtocart',data).then((res)=>
      console.log(res.data))
      setCartCount(cartCount + 1)
    
    }
    
    
const logout=()=>{
  localStorage.removeItem('userinfo')
}
  return (
       
   <div style={{backgroundColor:'black'}}>
   <div>
   <Navbar className='main-navbar' bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Nav>
      <Link className="nav-item nav-link active text-black" to="/userbooks"> Home</Link>
      <Link className="nav-item nav-link active text-black" to="/cartpage">
       <FontAwesomeIcon icon={faCartPlus} /><Badge variant="light">{cartCount}</Badge></Link>
      <Link className="nav-item nav-link active text-black" to="/userlogin" onClick={logout}>Log Out</Link>
      
      </Nav>
    </Container>
  </Navbar>
   </div>
    <div className='card-container'>
    {bookinfo.map((data)=>(
    <Card key={data._id} className='user-card' >
      <div><img style={{ width:"300px",
                        height:"210px",
                        borderTopLeftRadius:"10px",
                        borderTopRightRadius:"10px", }} 
                             className='img-fluid'
                            src={data.Image} alt="/"/></div>
      <Card.Body className='d-block'>
        <Card.Title>{data.BookName}</Card.Title>
        <Card.Text>
          Author:-{data.Author}<br/>
          Publication:-{data.Publication}<br/>

          Year:-{data.Year}<br/>
          Rs:-{data.Price}
        </Card.Text>
        
        <Button className='user-card-button' onClick={()=>handlecart(data._id)}>Add to cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    </div>


  )
}

export default UserSideBooks

