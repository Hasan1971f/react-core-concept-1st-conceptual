import {useEffect,  useState } from 'react'

import './App.css'
import Products from './components/products/products'


function App() {
  
  const information = {
    message: "secret",
    phone: "01974547438"
  };
  
  return (
    <>
     
      <h1>Hello React</h1>
   <Products info={information}></Products>
   
      
    </>
  )
}

export default App
