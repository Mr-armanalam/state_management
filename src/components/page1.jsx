import React from 'react'
import Page2 from './page2'
import { increment, decrement } from '../redux_reducer/slicer1'
import { useDispatch, useSelector } from 'react-redux'


const Page1 = () => {
  const usedispatch = useDispatch();
  const value = useSelector((state) => state.counter?.value);
  return (
    <div style={{cursor:"pointer"}} >
      <h1>Page1 triggered by reducer {value}</h1> 
      <button onClick={()=>usedispatch(increment())}>increment</button> 
      <button onClick={()=>usedispatch(decrement())}>decrement</button>
        <Page2 />
    </div>
  )
}

export default Page1