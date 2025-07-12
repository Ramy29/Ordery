import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext'
import Recentproducts from '../recentproducts/Recentproducts'
import Categoryslider from '../categoryslider/Categoryslider'


export default function Products() {


 
  return (
    <>
       <h2 className='text-3xl text-center pt-10 font-bold my-3 text-rose-600'> Products</h2>
       <Categoryslider/>
       <Recentproducts/>
    </>
  )
}
