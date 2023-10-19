'use client'
import React from 'react'
import {  useUserstore } from './Store'


const page = () => {
   
   const users=useUserstore((state)=>state.users)
   const setUsers=useUserstore((state)=>state.setUsers)
   
   console.log({users})
  return (
    <div>
       <button onClick={()=>setUsers()}> fetch</button>
    </div>
  )
}

export default page