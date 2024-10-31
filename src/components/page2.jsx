import React, { useContext } from 'react';
import {User1context} from '../hooks/provider1'


const Page2 = () => {
    const {counter,setCounter} = useContext(User1context);
    // console.log(user1)
  return (
    <div style={{cursor:"pointer", color:"blue"}} >
      <h2>Page2 triggered by usecontext hook {counter} </h2>
      <button onClick={()=>setCounter(counter+1)}>increment</button>
      <button onClick={()=>setCounter(counter-1)}>decrement</button>
    </div>
  )
}

export default Page2