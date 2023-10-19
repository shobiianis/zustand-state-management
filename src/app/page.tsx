'use client'
import React from 'react'
import { useBookStore } from './Store'


const page = () => {
   const amount=useBookStore((state)=>state.amount)
   const setAmount=useBookStore((state)=>state.setAmount)
   const quantity=useBookStore((state)=>state.quantity)
   const setquantity=useBookStore((state)=>state.setQuantity)
   
   console.log({amount,quantity})
  return (
    <div>
       
       <button onClick={()=>setAmount(23)} >amount</button>
       <button onClick={()=>setquantity(10)} >quantity</button>
   
    </div>
  )
}

export default page