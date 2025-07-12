import React from 'react'
import Layout from './componets/Layout/Layout'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Navbar from './componets/navbar/Navbar'
import Start from './componets/start/Start'
import Cart from './componets/Cart/Cart'
import NotFound from './componets/NotFound/NotFound'
import Products from './componets/Products/Products'
import Regestration from './componets/Regestration/Regestration'
import Login from './componets/Login/Login'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import Protectedrouting from './componets/ProtectedRouting/Protectedrouting'
import Productdetails from './componets/Productdetails/Productdetails'
import Cartcontextprovider from './Context/Cartcontext'
import toast, { Toaster } from 'react-hot-toast';
import Allorders from './componets/Allorders/Allorders'
import Checkout from './componets/Checkout/Checkout'
import Brands from './componets/Brands/Brands'
import About_us from './componets/About_us/About_us'


let routers=createBrowserRouter([
{path:'',element:<Layout/>,children:[
  {index:true,element:<Protectedrouting><Start/></Protectedrouting> },
   {path:'start',element: <Protectedrouting><Start/></Protectedrouting>},
   {path:'cart',element: <Protectedrouting><Cart/></Protectedrouting>},
   {path:'products',element:<Protectedrouting><Products/></Protectedrouting>},
   {path:'Brands',element:<Protectedrouting><Brands/></Protectedrouting>},
   {path:'About_us',element:<Protectedrouting><About_us/></Protectedrouting>},
   {path:'allorders',element:<Protectedrouting><Allorders/></Protectedrouting>},
   {path:'checkout',element:<Protectedrouting><Checkout/></Protectedrouting>},
   {path:'productdetails/:id/:category',element:<Protectedrouting><Productdetails/></Protectedrouting>},
   {path:'regestration',element:<Regestration/>},
   {path:'login',element:<Login/>},
   {path:'*',element:<NotFound/>},
  ]}
])
export default function App() {
  return (
    <>
<Cartcontextprovider>
<UserContextProvider>
<RouterProvider router={routers}/>   
<Toaster />
</UserContextProvider>
</Cartcontextprovider>
    
    </>
  )
}

