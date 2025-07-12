import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
export let cartcontext=createContext(0)


export default function Cartcontextprovider(props) {

    let headers={token:localStorage.getItem('usertoken')}
    let[cartitems,setcartitems]=useState(null)
  

    async function addToCart(productId) {
      
      try{
         let{data}=await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
          productId
         },{
          headers
        })
        console.log(data)
        setcartitems(data)
        toast.success(data.message,{duration:3000})
       return data
      }catch(err){

      }
     }
     async function getloggedcart() {
      
      try{
         let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
          headers
        })

        setcartitems(data)
         return data
      }catch(err){

      }
     }
     async function UpdateCount(productId,count) {
      
      try{
        let{data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        count
         },{
          headers
        })
       setcartitems(data)
       return data
      }catch(err){

      }
     }
     async function removeProductFromCart(productId) {
      
      try{
         let{data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers
        })
        setcartitems(data)
       return data
      }catch(err){

      }
     }
     async function chectoutsession(shippingAddress) {
      
      try{
         let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartitems.data._id}?url=http://localhost:3000`,{
          shippingAddress
         },{
          headers
        })
     //   console.log(data)
       return data
      }catch(err){

      }
     }
     useEffect(()=>{
      getloggedcart()

     },[])
    return <cartcontext.Provider value={{getloggedcart,removeProductFromCart,UpdateCount,chectoutsession,addToCart,cartitems,setcartitems}}>
      {props.children}

    </cartcontext.Provider>
}