import { type } from "os";
import { create } from "zustand";

interface IBook{
amount:number,
quantity:number
setAmount:(by:number)=>void
setQuantity:(by:number)=>void
}

export const useBookStore=create<IBook>((set)=>({
        amount:10,
        quantity:16,
        setAmount:(by)=>{
            
            set((state)=>({amount:state.amount+by}))
        },
        setQuantity:(by)=>{
            set((state)=>({quantity:state.quantity+by}))
        }   
}))

