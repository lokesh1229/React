import React from 'react'
import {useState} from 'react';

const App = () => {
  const [count,setCount] = useState(0);
  
  return (
    <>
    <div>
      <p>{count}</p>
    </div>
    <div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
    <div>
      <button onClick={(count)=> setCount(0) }>Reset</button>
    </div>
    </>
  )
}

export default App