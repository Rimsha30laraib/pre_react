import MenuItem from "./Menu";
import { useState } from "react";

const Cart=()=>{
    const [Counter,setCounter]=useState(0);
    const increment=()=>{
        setCounter(Counter+1)
    }
    const decrement=()=>{
        if (Counter > 0) {
            setCounter(Counter - 1);
          }
    }
    return (
        <>
        <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-4">Order list</h2>
       <ul className=" space-y-4">
        <section className="flex gap-2 ">
        <MenuItem item={{
            name:'Biryani',
            quantity:Counter
        }} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </section>
        <section className="flex gap-2">
        <MenuItem item={{
            name:'Karahi',
            quantity:Counter
        }} />
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
               </section>
         <section className="flex gap-2">
        <MenuItem item={{
            name:'Tikka',
            quantity:Counter
        }} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </section>
        </ul>
        </section>
        </>
    )
   
}
export default Cart;