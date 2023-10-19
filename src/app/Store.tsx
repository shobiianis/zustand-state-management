import { create } from "zustand"

interface IUser{
    users:any[],
    setUsers:()=>void
    }

export const useUserstore=create<IUser>((set)=>({
    users:[],
    setUsers:async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users")
      const data=await res.json()
      set({users:data})
    }
}))
