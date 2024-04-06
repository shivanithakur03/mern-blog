import React ,{useState}from 'react';
export default function App() {
  const[increment,setIncrement]=useState(10)
  const[decrement,setDecrement]=useState(100)
  return(
    <div>
      <h1>{increment}</h1>
      <button onClick={()=>{setIncrement(increment+2)}}>Increment</button>
      <h1>{decrement}</h1>
      <button onClick={()=>{setDecrement(decrement-2)}}>Decrement</button>
    </div>
  )
}
