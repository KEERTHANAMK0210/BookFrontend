// import React from 'react'

// import { useParams } from 'react-router-dom'
// import { useCart } from '../context/CartProvuder'

// function Cartpage() {
//     const [cart, setcart] = useCart()
   
//    const removecart = (id) =>{
//     try {
//       const mycart=[...cart]
//       console.log(id)
//       const index=mycart.findIndex(item=>item._id === id)
//       console.log(index);
//       mycart.splice(index,1)
//       setcart(mycart)
//       localStorage.setItem('cart',JSON.stringify(mycart))

//     } catch (error) {
//       console.log(error);
//     }

//    }
//   return (
//     <div>
//     <div>
//     <div>
//     <h4>{cart.length>=1 ? `you have ${cart.length}` : "Add items" }</h4>
//     </div>
//     <div>
//    {cart.map((details)=>(
//     <div key={details._id}>
//     <h4>Book Name:{details.BookName}</h4>
//     <h4>Author:{details.Author}</h4>
//     <h4>Publication:{details.Publication}</h4>
//     <h4>Year:{details.Year}</h4>
//     <h4>Avalibilty:{details.Avalibility}</h4>
//     <button onClick={()=>removecart(details._id)}>Remove</button>
// </div>
//    ))} 
//     </div>
//     </div>
    
//     </div>
//   )
// }


// export default Cartpage




// import React, { useEffect, useState } from 'react';
// import './cart.css';
// import { useCart } from '../context/CartProvuder';

// const CartPage =  () => {
//   const [price, setPrice] = useState(0);
//   const [cart, setcart] = useCart()

//   const handlePrice = ()=>{
//       let ans = 0;
//   if (cart) {
//       cart.map((item) => {
//           ans += item.amount * item.Price;
//       });
//   }
//   setPrice(ans);
//   }

//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item._id !== id);
//     setcart(arr);
//   };

//   useEffect(()=>{
//       handlePrice();
//   })
//   const handleChange = (item, d) =>{
// 		let ind = -1;
// 		cart.forEach((data, index)=>{
// 			if (data._id === item._id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += d;
		
// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setcart([...tempArr])
// 	}

// return (
//   <article>
//       {
//           cart?.map((item)=>(
//               <div className="cart_box" key={item._id}>
                  
//                       <p>{item.BookName}</p>
                  
//                   <div>
//                       <button onClick={()=>handleChange(item, +1)}> + </button>
//                       <button>{item.amount}</button>
//                       <button onClick={()=>handleChange(item, -1)}> - </button>
//                   </div>
//                   <div>
//                       <span>{item.Price}</span>
//                       <button onClick={()=>handleRemove(item.id)} >Remove</button>
//                   </div>
//               </div>
//           ))}
//       <div className='total'>
//           <span>Total Price of your Cart</span>
//           <span>Rs - {price}</span>
//       </div>
//   </article>
// )
// }

// export default CartPage


// import React, { useEffect, useState } from 'react';
// import './cart.css';
// import { useCart } from '../context/CartProvuder';


// const CartPage =  () => {
//   const [price, setPrice] = useState(0);
//   const [cart, setCart] = useCart();

//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item._id !== id);
//     setCart(arr);
//   };

//   const handleChange = (item, d) =>{
//     let ind = -1;
//     cart.forEach((data, index)=>{
//       if (data._id === item._id)
//         ind = index;
//     });
//     const updatedCart = [...cart];
//     updatedCart[ind] = { ...item, amount: item.amount + d };
    
//     if (updatedCart[ind].amount === 0)
//       updatedCart[ind].amount = 1;
//     setCart(updatedCart);
//   }

  
//   const handlePrice = ()=>{
//     let ans = 0;
// if (cart) {
//     cart.map((item) => {
//         ans += item.amount * item.price;
//     });
// }
// setPrice(ans);
// }

// useEffect(()=>{
//   handlePrice();
// })


//   return (
//     <article>
//       {cart?.map((item) => (
//         <div className="cart_box" key={item._id}>
//           <div className="cart_img">
//           <img src={item.Image} />
//           <p>{item.BookName}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, +1)}> + </button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}> - </button>
//           </div>
//           <div>
//             <span>{item.Price}</span>
//             <button onClick={() => handleRemove(item._id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className='total'>
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </article>
//   )
// }

// export default CartPage;





// import React from 'react';
// import { useCart } from '../context/CartProvuder';
// import './cart.css'
// import axios from 'axios';

// function Cartpage() {
//   const [cart, setCart] = useCart();

 

//     const handleChange = (item, d) =>{
//     		let ind = -1;
//     		cart.forEach((data, index)=>{
//     			if (data._id === item._id)
//     				ind = index;
//     		});
//     		const tempArr = cart;
//     		tempArr[ind].amount += d;
        
//     		if (tempArr[ind].amount === 0)
//     			tempArr[ind].amount = 1;
//     		setCart([...tempArr])
//     	}
//       const handledelete=async(productid)=>{
//               const prdctid=productid
//               const userid=localStorage.getItem('userid')
            
        
//               const data={productid:prdctid,userid:userid}
//               axios.put('http://localhost:4000/deletecart',data)
//               .then((res)=>(setCart(cart.filter(dt=>dt._id !== productid)),
//               console.log(res.data)
//               ))
              
//             }
            

  
  

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.amount * item.price, 0);
//   };

//   return (
//     <article>
//       {cart?.map((item) => (
//         <div className="cart_box" key={item._id}>
//           <div className="cart_img">
//             <img src={item.Image} />
//             <p>{item.BookName}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}> + </button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}> - </button>
//           </div>
//           <div>
//             <span>{item.Price}</span>
            
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {getTotalPrice()}</span>
//       </div>
//       <button onClick={()=>handledelete(item._id)}>Remove</button>
//     </article>
//   );
// }

// export default Cartpage;







import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './cart.css'

function Cartpage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const data = { userid: localStorage.getItem('userid') }
    console.log(data.userid)
    axios
      .post('http://localhost:4000/getcart', data)
      .then((res) => {
        console.log(res.data.data.cart)
        const initializedCart = res.data.data.cart.map((item) => ({
          ...item,
          Quantity: 1,
        }))
        setCart(initializedCart)
      })
  }, [])

  const handleDelete = async (productid) => {
    const prdctid = productid
    const userid = localStorage.getItem('userid')

    const data = { productid: prdctid, userid: userid }
    axios.put('http://localhost:4000/deletecart', data).then((res) => (
      setCart(cart.filter((dt) => dt._id !== productid)),
      console.log(res.data)
    ))
  }

  const handleIncrement = (productid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productid) {
        return {
          ...item,
          Quantity: item.Quantity + 1,
          Price: item.Price / item.Quantity * (item.Quantity + 1), // update the price based on the new quantity
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const handleDecrement = (productid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productid && item.Quantity > 1) {
        return {
          ...item,
          Quantity: item.Quantity - 1,
          Price: item.Price / item.Quantity * (item.Quantity - 1), // update the price based on the new quantity
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // calculate total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.Price;
  }, 0);


  return (
    <article>
      <div>
        {cart.map((details) => (
          <div className="cart_box" key={details._id}>
            <div className="cart_img">
              <img src={details.Image} />
              <p>{details.BookName}</p>
            </div>
            <p>{details.Price}</p>
            <div className="cart_quantity">
              <button onClick={() => handleDecrement(details._id)}>-</button>
              <span>{details.Quantity}</span>
              <button onClick={() => handleIncrement(details._id)}>+</button>
            </div>
            <button onClick={() => handleDelete(details._id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <span>Total price of your Cart</span> 
        
        <span>Rs- {totalPrice}</span>
        
        </div>
    </article>
  )
}

export default Cartpage