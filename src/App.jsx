import {useEffect,  useState } from 'react'

import './App.css'
import Products from './components/products/products'


function App() {
  // const [state, setState] = useState(0)
  // const [state1, setState1] = useState(0)
 
// useEffect(() =>{
//   console.log("hello from useEffect")
//  }, [state])
 

  // let storeageVar = 0
 
  // const handlevariableCount= ()=>{
  //   storeageVar = storeageVar + 1
  //   console.log(storeageVar)
  // }

 
  
// const handleState = ()=>{
//   setState(state + 1)
//   console.log(state)
// }

const [status, setStatus] = useState(false)


const handleStatus = () => {
  setStatus(!false)
}  
console.log(status)
  
  return (
    <>
     {/* <div>
      <h1>This is Stat count {state}</h1>
      <h1>This is Vrriable count {storeageVar} </h1>
     </div> */}

     <button onClick={handleStatus}>Handle Status</button>
   
     {/* <button onClick={handleState}>Change State Count</button>
     <button onClick={ handlevariableCount}>Change Vrriable Count</button>
     <br/> */}


   <h1>Hello App jsx</h1>
     
   
      
    
    </>
  )
}

export default App
