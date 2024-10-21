import {useEffect,  useState } from 'react'

import './App.css'
import Products from './components/products/products'


function App() {
  const [state, setState] = useState(0)
 
  let storeageVar = 0
 
  const handlevariableCount= ()=>{
    storeageVar = storeageVar + 1
    console.log(storeageVar)
  }

 
  
const handleState = ()=>{
  setState(state + 1)
  console.log(state)
}

console.log("hello boss")
  
  
  return (
    <>
     <div>
      <h1>This is Stat count {state}</h1>
      <h1>This is Vrriable count {storeageVar} </h1>
     </div>
     
     <button onClick={handleState}>Change State Count</button>
     <button onClick={ handlevariableCount}>Change Vrriable Count</button>
     <br/>



     
   
      
    </>
  )
}

export default App
